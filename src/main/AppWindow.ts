import * as path from "path";
import {
  __DARWIN__,
  __WIN32__,
  __LINUX__,
  __DEV__
} from "./utils/electron-utils";
import {
  BrowserWindow,
  MenuItem,
  MenuItemConstructorOptions,
  Menu,
  app
} from "electron";
import { mainProcessStore } from "./mainProcessStore";
import {
  appGotFocusAction,
  appLostFocusAction
} from "../shared/state/redux-app-focus";
import {
  setAppWindow,
  restoreAppWindowAction,
  maximizeAppWindowAction,
  minimizeAppWindowAction
} from "../shared/state/redux-window-state";
import { UiMenuItem, ElectronShellMenuItem } from "../shared/menu/ui-menu-item";
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
  ToggleDevToolsCommand
} from "../shared/menu/menu-commands";
import { setAppMenuAction } from "../shared/state/redux-menu-state";

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
  private _appCommands: UiMenuItem | null;

  // --- The associated Electron Shell application menu
  private _appMenu: Menu;

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
      windowOptions.frame = true;
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
  get appCommands(): UiMenuItem | null {
    return this.appCommands;
  }

  /**
   * Gets the Electron Shell's application menu
   */
  get appMenu(): Menu | null {
    return this._appMenu;
  }

  /**
   * Loads the contenst of the main window
   */
  load(): void {
    let watcher: any;
    if (__DEV__) {
      // --- Indev mode, setup hot reload
      const fileToWatch = path.join(
        __dirname,
        "./renderer.bundle.js"
      );
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
    const fileToLoad = `file://${path.join(
      __dirname,
      "./index.html"
    )}`;
    this._window.loadURL(fileToLoad);
  }

  /**
   * Sets up the initial application menu
   */
  setupMenu(): void {
    const aboutGroup = new UiMenuItem().append(new AboutCommand());
    const prefsGroup = new UiMenuItem().append(new OptionsCommand());
    const servicesGroup = new UiMenuItem().append(
      new ElectronShellMenuItem("services")
    );
    const appWindowGroup = new UiMenuItem()
      .append(new ElectronShellMenuItem("hide"))
      .append(new ElectronShellMenuItem("hideOthers"))
      .append(new ElectronShellMenuItem("unhide"));
    const quitGroup = new UiMenuItem().append(
      new ElectronShellMenuItem("quit", __DARWIN__ ? undefined : "E&xit")
    );

    const darwinMenu = new UiMenuItem("darwin", "ZX Spectrum IDE")
      .append(aboutGroup)
      .append(prefsGroup)
      .append(servicesGroup)
      .append(appWindowGroup)
      .append(quitGroup);

    const createGroup = new UiMenuItem()
      .append(new NewProjectCommand())
      .append(new OpenProjectCommand());
    const closeGroup = new UiMenuItem().append(new CloseProjectCommand());
    const fileMenu = new UiMenuItem("file", __DARWIN__ ? "File" : "&File")
      .append(createGroup)
      .append(closeGroup);
    if (!__DARWIN__) {
      fileMenu.append(prefsGroup);
    }
    fileMenu.append(quitGroup);

    const explorerGroup = new UiMenuItem()
      .append(new ShowExplorerCommand())
      .append(new ShowSpectrumEmulatorCommand());
    const spectrumWindowsGroup = new UiMenuItem()
      .append(new ShowRegistersCommand())
      .append(new ShowDisassemblyCommand())
      .append(new ShowMemoryCommand());
    const devToolGroup = new UiMenuItem().append(new ToggleDevToolsCommand());

    const viewMenu = new UiMenuItem("view", __DARWIN__ ? "View" : "&View")
      .append(explorerGroup)
      .append(spectrumWindowsGroup)
      .append(devToolGroup);

    const help1Group = new UiMenuItem()
      .enable(false)
      .append(new UiMenuItem("help-topic-1", "Help topic #1"))
      .append(new UiMenuItem("help-topic-2", "Help topic #2"));
    const help3SubGroup = new UiMenuItem("help-topic-3", "Help topic #&3")
      .append(new UiMenuItem("help-topic-31", "Help topic #31"))
      .append(new UiMenuItem("help-topic-32", "Help topic #32"))
      .append(new UiMenuItem("help-topic-33", "Help topic #33"));
    const help4SubGroup = new UiMenuItem("help-topic-4", "Help topic #&4")
      .append(new UiMenuItem("help-topic-41", "Help topic #41"))
      .append(new UiMenuItem("help-topic-42", "Help topic #42"))
      .append(new UiMenuItem("help-topic-43", "Help topic #43"));
    const help2Group = new UiMenuItem()
      .append(help3SubGroup)
      .append(help4SubGroup);

    const helpMenu = new UiMenuItem("help", __DARWIN__ ? "Help" : "H&elp")
      .append(help1Group)
      .append(help2Group);

    const menuCommands = new UiMenuItem();
    if (__DARWIN__) {
      menuCommands.append(darwinMenu);
    }
    menuCommands
      .append(fileMenu)
      .append(viewMenu)
      .append(helpMenu);

    this._appCommands = menuCommands;
    const template = this.buildDefaultMenuFromCommands(this._appCommands);
    this._appMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(this._appMenu);
    mainProcessStore.dispatch(setAppMenuAction(this._appCommands));
    this.window.webContents.toggleDevTools();
  }

  /**
   * Refreshes the state with the current app menu.
   */
  refreshMenu(): void {
    mainProcessStore.dispatch(setAppMenuAction(this._appCommands));
  }

  /**
   * Create the Electron Shell menu hierarchy from command structure
   * @param command Root command
   */
  private buildDefaultMenuFromCommands(
    commands: UiMenuItem
  ): MenuItemConstructorOptions[] {
    const topItems: MenuItemConstructorOptions[] = [];
    commands.items.forEach(item => {
      if (!item.label) {
        throw new Error("Top level command item must have a label.");
      }
      if (item.items.length === 0) {
        throw new Error(
          "Top level command item must have at least one subcommand."
        );
      }
      topItems.push(this.buildMenuPaneFromCommands(item));
    });
    return topItems;
  }

  /**
   * Creates an Electron Shell menu pane from the specified command group
   * @param menuGroup
   */
  private buildMenuPaneFromCommands(
    menuGroup: UiMenuItem
  ): MenuItemConstructorOptions {
    const separator: MenuItemConstructorOptions = { type: "separator" };
    const pane: MenuItemConstructorOptions[] = [];
    let lastItemWasGroup = false;
    let groupJustEnded = false;
    for (let i = 0; i < menuGroup.items.length; i++) {
      const subitem = menuGroup.items[i];

      // --- Provide separator between groups
      if (
        (i > 0 && subitem.items.length > 0 !== lastItemWasGroup) ||
        groupJustEnded
      ) {
        pane.push(separator);
      }
      lastItemWasGroup = subitem.items.length > 0;
      groupJustEnded = false;
      if (subitem.items.length > 0) {
        // --- We are about to process a command group
        for (const item of subitem.items) {
          let newItem: MenuItemConstructorOptions | null = null;
          if (item.items.length > 0) {
            // --- This is a submenu to render
            const submenu = this.buildMenuPaneFromCommands(item);
            pane.push(submenu);
          } else if (item.role) {
            // --- An Electron Shell predefined role
            newItem = {
              type: "normal",
              role: item.role
            };
          } else {
            // --- Normal menu item
            newItem = {
              label: item.label,
              accelerator: item.accelerator,
              click: () => item.onExecute(this._window)
            };
          }

          if (newItem == null) continue;

          // --- Ad a new item to the pane
          item.shellMenuItem = newItem;
          pane.push(newItem);
        }
        groupJustEnded = true;
      } else {
        // --- Normal menu item
        pane.push({
          label: subitem.label,
          accelerator: subitem.accelerator,
          click: () => subitem.onExecute(this._window)
        });
      }
    }

    // --- Done
    var newMenuItem: MenuItemConstructorOptions = {
      label: menuGroup.label,
      submenu: pane
    };
    menuGroup.shellMenuItem = newMenuItem;
    return newMenuItem;
  }
}
