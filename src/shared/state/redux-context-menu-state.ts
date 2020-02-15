import { MenuPaneInfo, getNextMenuItemIndex } from "../menu/MenuPaneInfo";
import { SpectNetAction, createLocalAction } from "./redux-core";

/**
 * Displays the context meno
 * @param pane Menu pane information
 */
export function showContextMenuAction(pane: MenuPaneInfo): SpectNetAction {
  return {
    type: "CONTEXT_MENU_SHOW",
    payload: {
      pane
    }
  };
}

/**
 * Hides the context menu
 */
export function hideContextMenuAction() {
  return createLocalAction("CONTEXT_MENU_HIDE");
} 

/**
 * Sets the specified item as selected
 * @param itemIndex Index of the selected item
 */
export function contextItemSelectAction(itemIndex: number): SpectNetAction {
  return createLocalAction("CONTEXT_MENU_ITEM_SELECT", { itemIndex });
}

/**
 * Action that moves down one item in the context menu pane
 */
export const contextItemDownAction = createLocalAction(
  "CONTEXT_MENU_ITEM_DOWN"
);

/**
 * Action that moves up one item in the context menu pane
 */
export const contextItemUpAction = createLocalAction("CONTEXT_MENU_ITEM_UP");

/**
 * Action that sets an item pointed in the context menu pane
 */
export function contextItemPointAction(itemIndex: number): SpectNetAction {
  return createLocalAction("CONTEXT_MENU_ITEM_POINT", {
    itemIndex
  });
}

/**
 * Sets the specified item as selected
 * @param itemIndex Index of the selected item
 */
export function contextMenuMountedAction(width: number, height: number): SpectNetAction {
  return createLocalAction("CONTEXT_MENU_MOUNTED", { width, height });
}


/**
 * This reducer manages application menu state changes
 * @param state Input state
 * @param action Action executed
 */
export function contextMenuStateReducer(
  state: MenuPaneInfo = null,
  { type, payload }: SpectNetAction
): MenuPaneInfo | null {
  switch (type) {
    case "CONTEXT_MENU_SHOW":
      return payload.pane;
    case "CONTEXT_MENU_HIDE":
      return null;
    case "CONTEXT_MENU_ITEM_SELECT":
      return {
        ...state,
        selectedIndex: payload.itemIndex
      };
    case "CONTEXT_MENU_ITEM_DOWN":
      return { ...state, selectedIndex: getNextMenuItemIndex(state, 1) };
    case "CONTEXT_MENU_ITEM_UP":
      return { ...state, selectedIndex: getNextMenuItemIndex(state, -1) };
    case "CONTEXT_MENU_ITEM_POINT":
      return {
        ...state,
        selectedIndex:
          payload.itemIndex >= 0
            ? state.items[payload.itemIndex].enabled
              ? payload.itemIndex
              : -1
            : -1
      };
    case "CONTEXT_MENU_MOUNTED":
      return {
        ...state,
        width: payload.width,
        height: payload.height
      }
  }
  return state;
}
