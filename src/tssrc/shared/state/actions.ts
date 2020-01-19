import { ActionTypes } from "./ActionTypes";
import { createAliasedAction } from "./redux-core";
import { BrowserWindow } from "electron";
import { Payload } from "./Payload";
// import { IMenu } from "../../menu/MenuItem";
// import { MenuPaneInfo } from "../../menu/MenuPaneInfo";

/**
 * This type definition describes the available metadata types.
 */
interface MetaTypes {
  scope?: "local";
  trigger?: string;
}

/**
 * This interface represents an action that can be used within this project.
 */
// tslint:disable-next-line:interface-name
export interface SpectNetAction {
  type: string;
  payload?: Payload;
  meta?: MetaTypes;
}

/**
 * The signature of an action creator function.
 */
export type ActionCreator = (...args: any) => SpectNetAction;

export function setModalAction(): SpectNetAction {
  return {
    type: ActionTypes.SET_MODAL
  };
}

// /**
//  * Creates an action for setting the main menu
//  * @param menu Menu to set
//  */
// export function setAppMenuAction(menu: IMenu): SpectNetAction {
//   return {
//     type: ActionTypes.SET_MENU,
//     payload: {
//       menu
//     }
//   };
// }

// ============================================================================
// Modal action creators

/**
 * Action that shows a modal dialog
 */
export function modalShow(): SpectNetAction {
  return createLocalAction(ActionTypes.MODAL_SHOW);
}

/**
 * Action that hides a modal dialog
 */
export function modalHide(): SpectNetAction {
  return createLocalAction(ActionTypes.MODAL_HIDE);
}

// ============================================================================
// Menu action creators

/**
 * Action that handles the AltLeft key down in a menu
 */
export function menuAltPressed(): SpectNetAction {
  return createLocalAction(ActionTypes.MENU_ALT_PRESSED);
}

/**
 * Action that handles the AltLeft key up in a menu
 */
export function menuAltReleased(): SpectNetAction {
  return createLocalAction(ActionTypes.MENU_ALT_RELEASED);
}

// /**
//  * Action that handles the left arrow key down in a menu
//  */
// export function menuButtonSet(
//   itemIndex: number,
//   pane: MenuPaneInfo,
//   keyboardAction: boolean
// ): SpectNetAction {
//   return createLocalAction(ActionTypes.MENU_BUTTON_SET, {
//     itemIndex,
//     pane,
//     keyboardAction
//   });
// }

/**
 * Action that handles when mouse enters a menu button
 */
export function menuButtonMouseEnter(itemIndex: number): SpectNetAction {
  return createLocalAction(ActionTypes.MENU_BUTTON_MOUSE_ENTER, { itemIndex });
}

/**
 * Action that handles when a menu button is clicked
 */
// export function menuButtonClick(
//   pane: MenuPaneInfo,
//   itemIndex: number
// ): SpectNetAction {
//   return createLocalAction(ActionTypes.MENU_BUTTON_CLICK, { pane, itemIndex });
// }

/**
 * Action that handles when a menu button is clicked
 */
export function menuPaneClose(): SpectNetAction {
  return createLocalAction(ActionTypes.MENU_PANE_CLOSE);
}

/**
 * Action that selectes the specified item in the current menu pane
 */
export function menuItemSelect(itemIndex: number): SpectNetAction {
  return createLocalAction(ActionTypes.MENU_ITEM_SELECT, { itemIndex });
}

/**
 * Action that moves down one item in the current menu pane
 */
export function menuItemDown(): SpectNetAction {
  return createLocalAction(ActionTypes.MENU_ITEM_DOWN);
}

/**
 * Action that moves up one item in the current menu pane
 */
export function menuItemUp(): SpectNetAction {
  return createLocalAction(ActionTypes.MENU_ITEM_UP);
}

// /**
//  * Action that moves up one item in the current menu pane
//  */
// export function menuPaneOpen(
//   pane: MenuPaneInfo,
//   keyboardAction: boolean
// ): SpectNetAction {
//   return createLocalAction(ActionTypes.MENU_PANE_OPEN, {
//     pane,
//     keyboardAction
//   });
// }

/**
 * Action that drops all open panes behind the specified one
 */
export function menuKeepPane(paneIndex: number): SpectNetAction {
  return createLocalAction(ActionTypes.MENU_KEEP_PANES, { paneIndex });
}

/**
 * Action that moves up one item in the current menu pane
 */
export function menuItemPoint(
  paneIndex: number,
  itemIndex: number
): SpectNetAction {
  return createLocalAction(ActionTypes.MENU_ITEM_POINT, {
    paneIndex,
    itemIndex
  });
}

/**
 * Action that closes all menu panes and deactivetes the menu bar.
 */
export function menuCloseAll(): SpectNetAction {
  return createLocalAction(ActionTypes.MENU_CLOSE_ALL);
}

// ============================================================================
// Aliased action creators

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
  ActionTypes.MAXIMIZE_APP_WINDOW,
  () => {
    if (hostBrowserWindow) {
      hostBrowserWindow.maximize();
    }
    return {
      type: ActionTypes.MAXIMIZE_APP_WINDOW
    };
  }
);

/**
 * Creates an action for minimizing the application window
 */
export const minimizeAppWindowAction = createAliasedAction(
  ActionTypes.MINIMIZE_APP_WINDOW,
  () => {
    if (hostBrowserWindow) {
      hostBrowserWindow.minimize();
    }
    return {
      type: ActionTypes.MINIMIZE_APP_WINDOW
    };
  }
);

/**
 * Creates an action for restoring the application window
 */
export const restoreAppWindow = createAliasedAction(
  ActionTypes.RESTORE_APP_WINDOW,
  () => {
    if (hostBrowserWindow) {
      hostBrowserWindow.unmaximize();
    }
    return {
      type: ActionTypes.RESTORE_APP_WINDOW
    };
  }
);

// ============================================================================
// Project action creators

/**
 * Creates an action to open the specified folder
 * @param projectFolder Current project folder
 */
export function openProjectAction(
  projectFolder: string,
  model: string,
  edition: string
): SpectNetAction {
  return {
    type: ActionTypes.OPEN_PROJECT,
    payload: {
      projectFolder,
      model,
      edition
    }
  };
}

/**
 * Creates an action to close the current project folder
 */
export function closeProjectAction(): SpectNetAction {
  return {
    type: ActionTypes.CLOSE_PROJECT
  };
}

// ============================================================================
// Virtual machine state action creators

/**
 * Creates an action to sign that the virtual machine has been instantiated
 */
export function vmCreatedAction(): SpectNetAction {
  return { type: ActionTypes.VM_CREATED };
}

/**
 * Creates an action to sign that the virtual machine has been disposed
 */
export function vmDisposedAction(): SpectNetAction {
  return { type: ActionTypes.VM_DISPOSED };
}

/**
 * Creates an action to move the VM into Running state
 * @param projectFolder Current project folder
 */
export function vmStartAction(runsInDebugMode: boolean): SpectNetAction {
  return { type: ActionTypes.VM_START, payload: { runsInDebugMode } };
}

/**
 * Creates an action to move the VM into Pausing state
 * @param projectFolder Current project folder
 */
export function vmPausingAction(): SpectNetAction {
  return { type: ActionTypes.VM_PAUSING };
}

/**
 * Creates an action to move the VM into Paused state
 * @param projectFolder Current project folder
 */
export function vmPausedAction(): SpectNetAction {
  return { type: ActionTypes.VM_PAUSED };
}

/**
 * Creates an action to move the VM into Stopping state
 * @param projectFolder Current project folder
 */
export function vmStoppingAction(): SpectNetAction {
  return { type: ActionTypes.VM_STOPPING };
}

/**
 * Creates an action to move the VM into Stopped state
 * @param projectFolder Current project folder
 */
export function vmStoppedAction(): SpectNetAction {
  return { type: ActionTypes.VM_STOPPED };
}

// ============================================================================
// Helpers

/**
 * Creates a local action
 * @param type Action string
 */
function createLocalAction(type: string, payload?: Payload): SpectNetAction {
  return {
    type,
    payload,
    meta: {
      scope: "local"
    }
  };
}
