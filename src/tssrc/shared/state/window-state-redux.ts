import { createAliasedAction, SpectNetAction } from "./redux-core";
import { BrowserWindow } from "electron";

/**
 * Represents the available values of window states.
 */
export type WindowState =
  | "minimized"
  | "normal"
  | "maximized"
  | "full-screen"
  | "hidden";

/**
 * Stores the reference to the host browser window
 */
export let hostBrowserWindow: BrowserWindow;

/**
 * Sets the referencve to the host browser window
 * @param window Host browser window
 */
export function setHostBrowserWindow(window: BrowserWindow) {
  hostBrowserWindow = window;
}

/**
 * Creates an action for maximizing the application window
 */
export const maximizeAppWindowAction = createAliasedAction(
  "MAXIMIZE_APP_WINDOW",
  () => {
    if (hostBrowserWindow) {
      hostBrowserWindow.maximize();
    }
    return {
      type: "MAXIMIZE_APP_WINDOW"
    };
  }
);

/**
 * Creates an action for minimizing the application window
 */
export const minimizeAppWindowAction = createAliasedAction(
  "MINIMIZE_APP_WINDOW",
  () => {
    if (hostBrowserWindow) {
      hostBrowserWindow.minimize();
    }
    return {
      type: "MINIMIZE_APP_WINDOW"
    };
  }
);

/**
 * Creates an action for restoring the application window
 */
export const restoreAppWindowAction = createAliasedAction(
  "RESTORE_APP_WINDOW",
  () => {
    if (hostBrowserWindow) {
      hostBrowserWindow.unmaximize();
    }
    return {
      type: "RESTORE_APP_WINDOW"
    };
  }
);

/**
 * This reducer manages application window state changes
 * @param state Input state
 * @param action Action executed
 */
export function windowStateReducer(
  state: WindowState = null,
  { type }: SpectNetAction
): WindowState {
  switch (type) {
    case "MAXIMIZE_APP_WINDOW":
      return "maximized";
    case "MINIMIZE_APP_WINDOW":
      return "minimized";
    case "RESTORE_APP_WINDOW":
      return "normal";
  }
  return state;
}
