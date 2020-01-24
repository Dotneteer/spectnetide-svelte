import { UiMenuItem } from "../menu/ui-menu-item";
import { SpectNetAction, createAliasedAction } from "./redux-core";
import { MenuState } from "./AppState";
import { appWindow } from "./redux-window-state";

/**
 * Creates an action for maximizing the application window
 */
export const showDevToolsAction = createAliasedAction(
  "TOGGLE_DEV_TOOLS",
  () => {
    if (appWindow) {
      appWindow.window.webContents.toggleDevTools();
    }
    return {
      type: "TOGGLE_DEV_TOOLS"
    };
  }
);

/**
 * Creates an action for setting the main menu
 * @param menu Menu to set
 */
export function setAppMenuAction(menu: UiMenuItem): SpectNetAction {
  return {
    type: "SET_MENU",
    payload: {
      menu
    }
  };
}

/**
 * Creates an action for maximizing the application window
 */
export const refreshMenuAction = createAliasedAction(
  "REFRESH_MENU",
  () => {
    if (appWindow) {
      console.log("Refreshed.");
      appWindow.refreshMenu();
    }
    return {
      type: "REFRESH_MENU"
    };
  }
);

/**
 * This reducer manages application window state changes
 * @param state Input state
 * @param action Action executed
 */
export function appMenuStateReducer(
  state: MenuState = null,
  { type, payload }: SpectNetAction
): MenuState {
  switch (type) {
    case "SET_MENU":
      return { ...state, menu: payload.menu };
  }
  return state;
}
