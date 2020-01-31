import { createAliasedAction, createLocalAction, SpectNetAction } from "./redux-core";
import { BrowserWindow } from "electron";
// import { IMenu } from "../../menu/MenuItem";
// import { MenuPaneInfo } from "../../menu/MenuPaneInfo";

/**
 * The signature of an action creator function.
 */
export type ActionCreator = (...args: any) => SpectNetAction;

export function setModalAction(): SpectNetAction {
  return {
    type: "SET_MODAL"
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
  return createLocalAction("MODAL_SHOW");
}

/**
 * Action that hides a modal dialog
 */
export function modalHide(): SpectNetAction {
  return createLocalAction("MODAL_HIDE");
}

// ============================================================================
// Menu action creators

/**
 * Action that handles the AltLeft key down in a menu
 */
export function menuAltPressed(): SpectNetAction {
  return createLocalAction("MENU_ALT_PRESSED");
}

/**
 * Action that handles the AltLeft key up in a menu
 */
export function menuAltReleased(): SpectNetAction {
  return createLocalAction("MENU_ALT_RELEASED");
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
  return createLocalAction("MENU_BUTTON_MOUSE_ENTER", { itemIndex });
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
  return createLocalAction("MENU_PANE_CLOSE");
}

/**
 * Action that selectes the specified item in the current menu pane
 */
export function menuItemSelect(itemIndex: number): SpectNetAction {
  return createLocalAction("MENU_ITEM_SELECT", { itemIndex });
}

/**
 * Action that moves down one item in the current menu pane
 */
export function menuItemDown(): SpectNetAction {
  return createLocalAction("MENU_ITEM_DOWN");
}

/**
 * Action that moves up one item in the current menu pane
 */
export function menuItemUp(): SpectNetAction {
  return createLocalAction("MENU_ITEM_UP");
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
  return createLocalAction("MENU_KEEP_PANES", { paneIndex });
}

/**
 * Action that moves up one item in the current menu pane
 */
export function menuItemPoint(
  paneIndex: number,
  itemIndex: number
): SpectNetAction {
  return createLocalAction("MENU_ITEM_POINT", {
    paneIndex,
    itemIndex
  });
}

/**
 * Action that closes all menu panes and deactivetes the menu bar.
 */
export function menuCloseAll(): SpectNetAction {
  return createLocalAction("MENU_CLOSE_ALL");
}

// ============================================================================
// Helpers

