import {
  SpectNetAction,
  createAliasedAction,
  createLocalAction
} from "./redux-core";
import { MenuState } from "./AppState";
import { MenuPaneInfo } from "../menu/MenuPaneInfo";
import { MenuItemBase } from "../menu/ui-menu-item";
import { appWindow } from "./app-reducers";

let autoPaneId = -1;

/**
 * Creates an action for setting the main menu
 * @param menu Menu to set
 */
export function setAppMenuAction(menu: MenuItemBase[]): SpectNetAction {
  return {
    type: "SET_MENU",
    payload: {
      menu
    }
  };
}

/**
 * Creates an action for refreshing the application menu
 */
export const refreshMenuAction = createAliasedAction("REFRESH_MENU", () => {
  if (appWindow) {
    appWindow.refreshMenu();
  }
  return {
    type: "REFRESH_MENU"
  };
});

/**
 * Action that handles the AltLeft key down in a menu
 */
export const menuAltPressedAction = createLocalAction("MENU_ALT_PRESSED");

/**
 * Action that handles the AltLeft key up in a menu
 */
export const menuAltReleasedAction = createLocalAction("MENU_ALT_RELEASED");

/**
 * Action that handles the left arrow key down in a menu
 */
export function menuButtonSetAction(
  itemIndex: number,
  pane: MenuPaneInfo,
  keyboardAction: boolean
): SpectNetAction {
  return createLocalAction("MENU_BUTTON_SET", {
    itemIndex,
    pane,
    keyboardAction
  });
}

/**
 * Action that handles when mouse enters a menu button
 */
export function menuButtonMouseEnterAction(itemIndex: number): SpectNetAction {
  return createLocalAction("MENU_BUTTON_MOUSE_ENTER", { itemIndex });
}

/**
 * Action that handles when a menu button is clicked
 */
export function menuButtonClickAction(
  pane: MenuPaneInfo,
  itemIndex: number
): SpectNetAction {
  return createLocalAction("MENU_BUTTON_CLICK", { pane, itemIndex });
}

/**
 * Action that handles when a menu button is clicked
 */
export function menuPaneCloseAction(): SpectNetAction {
  return createLocalAction("MENU_PANE_CLOSE");
}

/**
 * Action that selectes the specified item in the current menu pane
 */
export function menuItemSelectAction(itemIndex: number): SpectNetAction {
  return createLocalAction("MENU_ITEM_SELECT", { itemIndex });
}

/**
 * Action that moves down one item in the current menu pane
 */
export function menuItemDownAction(): SpectNetAction {
  return createLocalAction("MENU_ITEM_DOWN");
}

/**
 * Action that moves up one item in the current menu pane
 */
export function menuItemUpAction(): SpectNetAction {
  return createLocalAction("MENU_ITEM_UP");
}

/**
 * Action that moves up one item in the current menu pane
 */
export function menuPaneOpenAction(
  pane: MenuPaneInfo,
  keyboardAction: boolean
): SpectNetAction {
  return createLocalAction("MENU_PANE_OPEN", {
    pane,
    keyboardAction
  });
}

/**
 * Action that drops all open panes behind the specified one
 */
export function menuKeepPaneAction(paneIndex: number): SpectNetAction {
  return createLocalAction("MENU_KEEP_PANES", { paneIndex });
}

/**
 * Action that moves up one item in the current menu pane
 */
export function menuItemPointAction(
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
export function menuCloseAllAction(): SpectNetAction {
  return createLocalAction("MENU_CLOSE_ALL");
}

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

    case "MENU_ALT_PRESSED":
      return {
        ...state,
        highlightAccessKeys: getSelectedItem(state) < 0,
        openPanes: [],
        keyboardAction: true
      };

    case "MENU_ALT_RELEASED":
      const itemIndex = getSelectedItem(state) < 0 ? 0 : -1;
      return {
        ...state,
        selectedIndex: itemIndex,
        highlightAccessKeys: itemIndex >= 0,
        keyboardAction: true
      };

    case "MENU_BUTTON_SET":
      return {
        ...state,
        selectedIndex: payload.itemIndex,
        openPanes: payload.pane ? [payload.pane] : [],
        keyboardAction: payload.keyboardAction
      };

    case "MENU_BUTTON_MOUSE_ENTER":
      return {
        ...state,
        selectedIndex: payload.itemIndex,
        keyboardAction: false
      };

    case "MENU_BUTTON_CLICK":
      return {
        ...state,
        selectedIndex: payload.itemIndex,
        openPanes: payload.pane ? [payload.pane]: []
      };

    case "MENU_PANE_CLOSE": {
      const { parentPanes, lastPane } = getOpenMenuPanes(state);
      if (lastPane) {
        return {
          ...state,
          openPanes: parentPanes,
          keyboardAction: true
        };
      } else {
        return {
          ...state,
          selectedIndex: -1,
          highlightAccessKeys: false,
          keyboardAction: true
        };
      }
    }

    case "MENU_ITEM_SELECT": {
      const { parentPanes, lastPane } = getOpenMenuPanes(state);
      if (lastPane) {
        return {
          ...state,
          openPanes: [
            ...parentPanes,
            { ...lastPane, selectedIndex: payload.itemIndex }
          ],
          keyboardAction: true
        };
      }
      break;
    }

    case "MENU_ITEM_DOWN": {
      const { parentPanes, lastPane } = getOpenMenuPanes(state);
      if (lastPane) {
        return {
          ...state,
          openPanes: [
            ...parentPanes,
            { ...lastPane, selectedIndex: getNextMenuItemIndex(lastPane, 1) }
          ],
          keyboardAction: true
        };
      }
      break;
    }

    case "MENU_ITEM_UP": {
      const { parentPanes, lastPane } = getOpenMenuPanes(state);
      if (lastPane) {
        return {
          ...state,
          openPanes: [
            ...parentPanes,
            { ...lastPane, selectedIndex: getNextMenuItemIndex(lastPane, -1) }
          ],
          keyboardAction: true
        };
      }
      break;
    }

    case "MENU_PANE_OPEN":
      return {
        ...state,
        openPanes: [...state.openPanes, payload.pane],
        keyboardAction: payload.keyboardAction
      };

    case "MENU_KEEP_PANES":
      return {
        ...state,
        openPanes: [...state.openPanes.slice(0, payload.paneIndex + 1)],
        keyboardAction: false
      };

    case "MENU_ITEM_POINT": {
      const panes = state.openPanes.slice(0);
      const pane = panes[payload.paneIndex];
      if (pane) {
        const selectedIndex =
          payload.itemIndex >= 0
            ? pane.items[payload.itemIndex].enabled
              ? payload.itemIndex
              : -1
            : -1;
        panes[payload.paneIndex] = {
          id: autoPaneId--,
          items: pane.items,
          parentIndex: pane.parentIndex,
          leftPos: pane.leftPos,
          topPos: pane.topPos,
          selectedIndex
        };
        return {
          ...state,
          openPanes: panes,
          keyboardAction: false
        };
      }
      break;
    }

    case "MENU_CLOSE_ALL":
      return {
        ...state,
        selectedIndex: -1,
        highlightAccessKeys: false,
        openPanes: [],
        keyboardAction: false
      };
  }
  return state;
}

/**
 * Gets the `selectedItem` member of the menu state
 * @param state Menu state
 */
function getSelectedItem(state: MenuState): number {
  return state.selectedIndex === undefined ? -1 : state.selectedIndex;
}

/**
 * Gets the split form of open menu panes. Separates the parent panes from the last
 * menu pane.
 * @param state Menu state
 */
function getOpenMenuPanes(
  state: MenuState
): { parentPanes: MenuPaneInfo[]; lastPane: MenuPaneInfo | null } {
  const parentPanes = state.openPanes.slice(0);
  const lastPane = parentPanes.length > 0 ? parentPanes.pop() : null;
  return {
    parentPanes,
    lastPane
  };
}

/**
 * Gets the next menu item index
 * @param pane Menu pane information
 * @param step Step (-1: previous item, 1: next item)
 */
function getNextMenuItemIndex(pane: MenuPaneInfo, step: number): number {
  const count = pane.items.length;
  let selectedIndex = pane.selectedIndex;
  for (let i = 1; i < pane.items.length; i++) {
    const nextItemIndex = (pane.selectedIndex + step * i + count) % count;
    const item = pane.items[nextItemIndex];
    if (item.type !== "separator" && item.enabled) {
      selectedIndex = nextItemIndex;
      break;
    }
  }
  return selectedIndex;
}
