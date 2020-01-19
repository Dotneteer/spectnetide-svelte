import * as path from "path";
import {
  __DARWIN__,
  __WIN32__,
  __LINUX__,
  __DEV__
} from "./utils/electron-utils";
import { BrowserWindow, app, ipcMain } from "electron";
import { setHostBrowserWindow } from "../shared/state/actions";
import { mainProcessStore } from "./mainProcessStore";
import {
  appGotFocusAction,
  appLostFocusAction
} from "../shared/state/app-focus-redux";

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
        // --- Disable auxclick event
        // --- See https://developers.google.com/web/updates/2016/10/auxclick
        disableBlinkFeatures: "Auxclick",
        // --- Enable, among other things, the ResizeObserver
        experimentalFeatures: true
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
    setHostBrowserWindow(this._window);

    // --- Set up main window events
    this._window.on("focus", () => {
      console.log("got focus");
      mainProcessStore.dispatch(appGotFocusAction());
    });
    this._window.on("blur", () => {
      console.log("lost focus");
      mainProcessStore.dispatch(appLostFocusAction());
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
   * Loads the contenst of the main window
   */
  load(): void {
    let watcher: any;
    if (__DEV__) {
      // --- Indev mode, setup hot reload
      const fileToWatch = path.join(
        __dirname,
        "../../../public/build/bundle.js"
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
      "../../../public/index.html"
    )}`;
    this._window.loadURL(fileToLoad);
  }
}
