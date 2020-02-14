import * as path from "path";
import {
  __DARWIN__,
  __WIN32__,
  __LINUX__,
  __DEV__
} from "./utils/electron-utils";
import {
  BrowserWindow,
  MenuItemConstructorOptions,
  Menu,
  ipcMain,
  IpcMainEvent,
  MenuItem
} from "electron";
import { mainProcessStore } from "./mainProcessStore";
import {
  appGotFocusAction,
  appLostFocusAction
} from "../shared/state/redux-app-focus";
import {
  restoreAppWindowAction,
  maximizeAppWindowAction,
  minimizeAppWindowAction
} from "../shared/state/redux-window-state";
import {
  ElectronShellMenuItem,
  MenuItemBase,
  StandardMenuItem,
  MenuSeparator,
  MenuItemDescriptor
} from "../shared/menu/ui-menu-item";
import {
  AboutCommand,
  OptionsCommand,
  NewProjectCommand,
  OpenProjectCommand,
  CloseProjectCommand,
  ShowExplorerCommand,
  ShowSpectrumEmulatorCommand,
  ShowRegistersCommand,
  ShowDisassemblyCommand,
  ShowMemoryCommand,
  ToggleDevToolsCommand,
  ShowOutputCommand,
  ShowErrorsCommand,
  ShowConsoleCommand
} from "../shared/menu/menu-commands";
import { setAppMenuAction } from "../shared/state/redux-menu-state";
import { MENU_EXEC_CHANNEL } from "@/shared/channel-ids";
import { Activity } from "@/shared/activity/Activity";
import { setActivitiesAction } from "@/shared/state/redux-activity-state";
import { setAppWindow } from "@/shared/state/app-reducers";

/**
 * Stores a reference to the lazily loaded `electron-window-state` package.
 */
let windowStateKeeper: any | null = null;

/**
 * Minimum application window dimesnions
 */
const MIN_WIDTH = 960;
const MIN_HEIGHT = 660;

/**
 * This class encapsulates the functionality of the application's window
 * at the main process side.
 */
export class AppWindow {
  /**
   * Now, we allow only a singleton instance
   */
  static instance: AppWindow;

  // --- The associated BrowserWindow instance
  private _window: BrowserWindow | null;

  // --- The associated menu command hierarchy
  private _appCommands: MenuItemBase[] | null;

  // --- The associated Electron Shell application menu
  private _appMenu: Menu;

  // --- The map of available commands
  private _commandMap: Map<string, MenuItem>;

  // --- The available activities
  private _activities: Activity[] | null;

  // ==========================================================================
  // Lifecycle methods

  /**
   * Instantiates the browser window
   */
  constructor() {
    // --- Store the reference to the singleton instance
    AppWindow.instance = this;

    // --- Setup the state keeper module
    if (!windowStateKeeper) {
      windowStateKeeper = require("electron-window-state");
    }

    // --- Restore the last window state
    const savedWindowState = windowStateKeeper({
      defaultWidth: MIN_WIDTH,
      defaultHeight: MIN_HEIGHT
    });

    // --- Prepare the configuration options for the app window
    const windowOptions: Electron.BrowserWindowConstructorOptions = {
      x: savedWindowState.x,
      y: savedWindowState.y,
      width: savedWindowState.width,
      height: savedWindowState.height,
      minWidth: MIN_WIDTH,
      minHeight: MIN_HEIGHT,
      show: true,
      // --- This fixes subpixel aliasing on Windows
      // --- See https://github.com/atom/atom/commit/683bef5b9d133cb194b476938c77cc07fd05b972
      backgroundColor: "#fff",
      webPreferences: {
        webSecurity: false,
        devTools: process.env.NODE_ENV === "production" ? false : true,
        nodeIntegration: true
      },
      acceptFirstMouse: true
    };

    // --- Additional options depending on the host platform
    if (__DARWIN__) {
      windowOptions.titleBarStyle = "hidden";
    } else if (__WIN32__) {
      // TODO: Set it to false when menu proxy is ready
      windowOptions.frame = false;
    } else if (__LINUX__) {
      windowOptions.icon = path.join(__dirname, "static", "icon-logo.png");
    }

    this._window = new BrowserWindow(windowOptions);
    setAppWindow(this);

    // --- Set up main window events
    this._window.on("focus", () => {
      mainProcessStore.dispatch(appGotFocusAction());
    });
    this._window.on("blur", () => {
      mainProcessStore.dispatch(appLostFocusAction());
    });
    this.window.on("enter-full-screen", () => {
      // TODO: Implement this
    });

    // So this is a bit of a hack. If we call window.isFullScreen directly after
    // receiving the leave-full-screen event it'll return true which isn't what
    // we're after. So we'll say that we're transitioning to 'normal' even though
    // we might be maximized. This works because electron will emit a 'maximized'
    // event after 'leave-full-screen' if the state prior to full-screen was maximized.
    this.window.on("leave-full-screen", () => {
      mainProcessStore.dispatch(restoreAppWindowAction());
    });
    this.window.on("maximize", () => {
      mainProcessStore.dispatch(maximizeAppWindowAction());
    });
    this.window.on("minimize", () => {
      mainProcessStore.dispatch(minimizeAppWindowAction());
    });
    this.window.on("unmaximize", () => {
      mainProcessStore.dispatch(restoreAppWindowAction());
    });
    this.window.on("restore", () => {
      mainProcessStore.dispatch(restoreAppWindowAction());
    });
    this.window.on("hide", () => {
      // TODO: Implement this
    });
    this.window.on("show", () => {
      mainProcessStore.dispatch(restoreAppWindowAction());
    });

    // --- Set up menu command execution
    ipcMain.on(MENU_EXEC_CHANNEL, (_event: IpcMainEvent, commandId: string) => {
      const itemToExecute = this._commandMap.get(commandId);
      if (!itemToExecute) {
        throw new Error(`Unknown menu command: ${commandId}`);
      }
      itemToExecute.click();
    });

    // --- Allow the `electron-windows-state` package to follow and save the
    // --- app window's state
    savedWindowState.manage(this._window);
  }

  /**
   * Gets the associated BrowserWindow
   */
  get window(): BrowserWindow | null {
    return this._window;
  }

  /**
   * Gets the application menu's command structure
   */
  get appCommands(): MenuItemBase[] | null {
    return this.appCommands;
  }

  /**
   * Gets the Electron Shell's application menu
   */
  get appMenu(): Menu | null {
    return this._appMenu;
  }

  /**
   * Gets the command map
   */
  get commandMap(): Map<string, MenuItem> {
    return this._commandMap;
  }

  /**
   * Loads the contenst of the main window
   */
  load(): void {
    let watcher: any;
    if (__DEV__) {
      // --- Indev mode, setup hot reload
      const fileToWatch = path.join(__dirname, "./renderer.bundle.js");
      watcher = require("chokidar").watch(fileToWatch, { ignoreInitial: true });
      watcher.on("change", () => this._window.reload());
    }

    this._window.on("closed", () => {
      // --- Release resources
      this._window = null;
      if (watcher) {
        watcher.close();
      }
    });

    // --- Load the main file
    const fileToLoad = `file://${path.join(__dirname, "./index.html")}`;
    this._window.loadURL(fileToLoad);
  }

  /**
   * Sets up the initial application menu.
   */
  setupMenu(): void {
    const preferencesItem = new OptionsCommand();
    const quitItem = new ElectronShellMenuItem(
      "quit",
      __DARWIN__ ? undefined : "E&xit"
    );

    // --- Assemble the "File" menu
    const fileMenu = new StandardMenuItem("file", __DARWIN__ ? "File" : "&File")
      .append(new NewProjectCommand())
      .append(new OpenProjectCommand())
      .append(new MenuSeparator())
      .append(new CloseProjectCommand());
    if (!__DARWIN__) {
      fileMenu.append(preferencesItem);
    }
    fileMenu.append(quitItem);

    // --- Assemble the "View" menu
    const viewMenu = new StandardMenuItem("view", __DARWIN__ ? "View" : "&View")
      .append(new ShowExplorerCommand())
      .append(new ShowSpectrumEmulatorCommand())
      .append(new MenuSeparator())
      .append(new ShowRegistersCommand())
      .append(new ShowDisassemblyCommand())
      .append(new ShowMemoryCommand())
      .append(new MenuSeparator())
      .append(new ShowOutputCommand())
      .append(new ShowErrorsCommand())
      .append(new ShowConsoleCommand())
      .append(new MenuSeparator())
      .append(new ToggleDevToolsCommand());

    const help3Submenu = new StandardMenuItem("help-topic-3", "Help topic #&3")
      .append(new StandardMenuItem("help-topic-31", "Help topic #31"))
      .append(new StandardMenuItem("help-topic-32", "Help topic #32"))
      .append(new StandardMenuItem("help-topic-33", "Help topic #33"));
    const help4Submenu = new StandardMenuItem("help-topic-4", "Help topic #&4")
      .append(new StandardMenuItem("help-topic-41", "Help topic #41"))
      .append(new StandardMenuItem("help-topic-42", "Help topic #42"))
      .append(new StandardMenuItem("help-topic-43", "Help topic #43"));

    // --- Assemble the "Help" menu
    const helpMenu = new StandardMenuItem("help", __DARWIN__ ? "Help" : "H&elp")
      .append(new StandardMenuItem("help-topic-1", "Help topic #1"))
      .append(
        new StandardMenuItem("help-topic-2", "Help topic #2").enable(false)
      )
      .append(new MenuSeparator())
      .append(help3Submenu)
      .append(new MenuSeparator())
      .append(help4Submenu);

    const darwinMenu = new StandardMenuItem("darwin", "ZX Spectrum IDE")
      .append(new AboutCommand())
      .append(new MenuSeparator())
      .append(preferencesItem)
      .append(new MenuSeparator())
      .append(new ElectronShellMenuItem("services"))
      .append(new MenuSeparator())
      .append(new ElectronShellMenuItem("hide"))
      .append(new ElectronShellMenuItem("hideOthers"))
      .append(new ElectronShellMenuItem("unhide"))
      .append(new MenuSeparator())
      .append(quitItem);
    const mainMenu: MenuItemBase[] = [];
    if (__DARWIN__) {
      mainMenu.push(darwinMenu);
    }
    mainMenu.push(fileMenu, viewMenu, helpMenu);

    this._appCommands = mainMenu;
    this._commandMap = new Map<string, MenuItem>();
    const template = this.buildDefaultMenuFromCommands(this._appCommands);
    this._appMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(this._appMenu);
    this.buildCommandMap(this._appMenu);
    mainProcessStore.dispatch(setAppMenuAction(this._appCommands));
  }

  /**
   * Refreshes the state with the current app menu.
   */
  refreshMenu(): void {
    mainProcessStore.dispatch(setAppMenuAction(this._appCommands));
  }

  /**
   * Sets up the initial activity bar.
   */
  setupActivityBar(): void {
    this._activities = [
      {
        id: "emulator-view",
        iconName: "vm"
      },
      {
        id: "file-view",
        iconName: "files"
      },
      {
        id: "debug-view",
        iconName: "debug-alt"
      },
      {
        id: "test-view",
        iconName: "beaker"
      },
      {
        id: "settings",
        iconName: "settings-gear",
        isSystemActivity: true,
      }
    ];
  }

  /**
   * Refreshes the state with the current activities.
   */
  refreshActivityBar(): void {
    mainProcessStore.dispatch(setActivitiesAction(this._activities));
  }

  /**
   * Create the Electron Shell menu hierarchy from command structure
   * @param command Root command
   */
  private buildDefaultMenuFromCommands(
    menus: MenuItemBase[]
  ): MenuItemConstructorOptions[] {
    const topItems: MenuItemConstructorOptions[] = [];
    menus.forEach(item => {
      if (!item.label) {
        throw new Error("Top level command item must have a label.");
      }
      if (item.submenu.length === 0) {
        throw new Error(
          "Top level command item must have at least one subcommand."
        );
      }
      topItems.push(this.buildMenuPaneFromCommands(item.label, item.submenu));
    });
    return topItems;
  }

  /**
   * Creates an Electron Shell menu pane from the specified command group
   * @param menuGroup
   */
  private buildMenuPaneFromCommands(
    label: string,
    menuGroup: MenuItemDescriptor[] | undefined
  ): MenuItemConstructorOptions {
    const appWindow = this;
    const pane = menuGroup.map(function(
      item: MenuItemBase
    ): MenuItemConstructorOptions {
      // --- Create an Electron Shell menu item
      const menuItem: MenuItemConstructorOptions = {
        id: item.id,
        type: item.type,
        role: item.role,
        submenu: item.submenu
          ? appWindow.buildMenuPaneFromCommands(item.label, item.submenu)
              .submenu
          : undefined,
        label: item.label,
        accelerator: item.accelerator,
        enabled: item.enabled,
        visible: item.visible,
        checked: item.checked
      };

      // --- Set up custom action
      if (!menuItem.role) {
        menuItem.click = () => item.onExecute(appWindow._window);
      }
      return menuItem;
    });

    // --- Done
    return {
      label,
      submenu: pane
    };
  }

  /**
   * Builds the map of commands from the specified menu
   * @param menu Application menu
   */
  private buildCommandMap(menu: Menu): void {
    const appWindow = this;
    this._commandMap = new Map<string, MenuItem>();
    mapCommands(menu.items);

    /**
     * Maps commands in the specified group
     * @param group
     */
    function mapCommands(group: MenuItem[]): void {
      group.forEach(item => {
        if (
          item.type !== "separator" &&
          (!item.submenu || item.submenu.items.length === 0)
        ) {
          // --- This is a command item
          if (appWindow._commandMap.has(item.id)) {
            throw new Error(
              `Command with ID '${item.id}' is already registered.`
            );
          }
          appWindow._commandMap.set(item.id, item);
        } else if (
          item.submenu &&
          item.submenu.items &&
          item.submenu.items.length > 0
        ) {
          mapCommands(item.submenu.items);
        }
      });
    }
  }
}
