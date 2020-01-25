import { menuAltPressed, menuAltReleased } from "../../shared/state/actions";
import { rendererProcessStore } from "../rendererProcessStore";
import {
  menuPaneClose,
  menuButtonSet,
  menuPaneOpen,
  menuItemDown,
  menuItemUp,
  menuItemSelect,
  menuCloseAll
} from "../../shared/state/redux-menu-state";
import { MenuPaneInfo } from "../../shared/menu/MenuPaneInfo";
import { ElementRectangle } from "./ElementRectangle";
import { flattenCommandGroup } from "./menu-pane-logic";
import { UiMenuItem } from "../../shared/menu/ui-menu-item";

// --- This is the store we use to dispatch redux actions
const store = rendererProcessStore;

// ---
let delayedRemove = -1;

// --- Menu button boundary information
const menuButtons: ElementRectangle[] = [];

// --- Pane information of open panes
const panes: ElementRectangle[] = [];

// --- Menu item boundary information
// --- (first index: pane, second index: item within a pane)
const paneItems: ElementRectangle[][] = [];

// --- Create a new sequence number for a new pane
let nextPaneId = 0;

/**
 * Handles the event when a MenuButton instance is displayed.
 * @param index MenuButton index
 * @param rectangle MenuButton rectangle
 */
export function handleButtonMounted(
  index: number,
  rectangle: ElementRectangle
): void {
  menuButtons[index] = rectangle;
}

/**
 * Handles the event when a menu pane has been displayed
 * @param index Pane index
 * @param rectangle Pane information
 */
export function handlePaneMounted(
  index: number,
  rectangle: ElementRectangle
): void {
  panes[index] = rectangle;
}

/**
 * Hanldes the event when a menu pane item has been displayed
 * @param paneIndex Index of the pane
 * @param itemIndex Index of the item within a pane
 * @param rectangle MenuItem rectangle
 */
export function handlePaneItemMounted(
  paneIndex: number,
  itemIndex: number,
  rectangle: ElementRectangle
): void {
  if (paneItems[paneIndex] === undefined) {
    paneItems[paneIndex] = [];
  }
  paneItems[paneIndex][itemIndex] = rectangle;
}

/**
 * Handles the event when a menu item has been pointed.
 */
export function handleItemPointed(): void {
  // TODO: Implement this method
}

/**
 * Handles the event when a menu item has been clicked.
 */
export function handleItemClicked(): void {
  // TODO: Implement this method
}

/**
 * Handles the event when a key has been pressed down
 */
export function handleKeyDown(ev: KeyboardEvent): void {
  console.log(`KeyDown: ${ev.code}`);
  if (ev.code === "AltLeft") {
    store.dispatch(menuAltPressed());
  }

  // --- No button is pointed, no more action
  const state = store.getState().appMenu;
  if (state.selectedIndex < 0) {
    return;
  }

  // --- From this point on, we use the keyboard.
  // --- Here, we allow the mouse to delay submenu removal.
  delayedRemove = -1;

  // --- "Escape" removes the focus
  if (ev.code === "Escape") {
    store.dispatch(menuPaneClose());
    return;
  }

  // --- Move one step to left or close the open pane
  if (ev.code === "ArrowLeft") {
    // --- More than one menu pane is open, close the last one
    if (state.openPanes.length > 1) {
      store.dispatch(menuPaneClose());
      return;
    }

    // --- Move to the left
    let index = state.selectedIndex - 1;
    if (index < 0) {
      index = state.menu.items.length - 1;
    }

    // --- Open the pane of the menu button
    const pane = state.openPanes.length > 0 ? getButtonPane(index) : undefined;
    store.dispatch(menuButtonSet(index, pane, true));
    return;
  }

  // --- Move one step to right or open a submenu pane
  if (ev.code === "ArrowRight") {
    // --- Try to open the submenu of the current item and complete if succeeded
    if (tryOpenSubmenuPane()) {
      return;
    }

    // --- We're not in the first menu pane
    if (state.openPanes.length > 1) {
      return;
    }

    // --- We're in the first menu pane, move to the right
    let index = state.selectedIndex + 1;
    if (index > state.menu.items.length - 1) {
      index = 0;
    }

    // --- Open the pane of the menu button
    const pane = state.openPanes.length > 0 ? getButtonPane(index) : undefined;
    store.dispatch(menuButtonSet(index, pane, true));
    // TODO: Store this info
    //lastMouseEntered = undefined;
    return;
  }

  if (ev.code === "Enter") {
    menuItemAction();
    return;
  }

  if (ev.code === "ArrowDown") {
    // --- Open the button's pane, provided none is open
    if (state.openPanes.length === 0) {
      store.dispatch(
        menuButtonSet(
          state.selectedIndex,
          getButtonPane(state.selectedIndex),
          true
        )
      );
      return;
    }

    // --- Move down one item
    store.dispatch(menuItemDown());
    return;
  }

  if (ev.code === "ArrowUp") {
    // --- Move up one item
    store.dispatch(menuItemUp());
    return;
  }

  // --- Do we need to check accelarator keys?
  if (!state.highlightAccessKeys) {
    return;
  }

  if (state.openPanes.length > 0) {
    const pane = state.openPanes[state.openPanes.length - 1];
    const pressedIndex = findAccKey(ev.code, pane.items);
    if (pressedIndex >= 0) {
      store.dispatch(menuItemSelect(pressedIndex));
      setTimeout(() => {
        menuItemAction();
      }, 100);
    }
  } else {
    // --- We're looking for the accelerator key of a main menu item.
    const pressedIndex = findAccKey(ev.code, state.menu.items);
    if (pressedIndex >= 0) {
      // --- Accelerator key found, set the main menu item to display
      let pane =
        state.openPanes.length > 0 ? getButtonPane(pressedIndex) : undefined;
      store.dispatch(menuButtonSet(pressedIndex, pane, true));

      // --- Open the related manu pane
      const index = state.selectedIndex;
      pane = getButtonPane(index);
      store.dispatch(menuButtonSet(index, pane, true));
      return;
    }
  }
}

/**
 * Handles the event when a key has been released down
 */
export function handleKeyUp(ev: KeyboardEvent): void {
  console.log(`KeyUp: ${ev.code}`);
  if (ev.code === "AltLeft") {
    store.dispatch(menuAltReleased());
  }
}

// ============================================================================
// Helpers

/**
 * Try to opens the submenu pane of the current item.
 * @returns True, if submenu opened; otherwise, false
 */
function tryOpenSubmenuPane(): boolean {
  const subMenuPane = getSubmenuPane();
  if (subMenuPane) {
    store.dispatch(menuPaneOpen(subMenuPane, true));
    //lastMouseEntered = undefined;
    return true;
  }
  return false;
}

/**
 * Gets the menu pain information for the specified button.
 * @param button Button to get the pane information for
 */
function getButtonPane(index: number): MenuPaneInfo | undefined {
  const state = store.getState().appMenu;
  const buttonRect = menuButtons[index];
  const pane = {
    id: nextPaneId++,
    parentIndex: -1,
    items: state.menu.items[index].items,
    leftPos: buttonRect.left,
    topPos: buttonRect.top + buttonRect.height,
    selectedIndex: -1
  };
  if (state.keyboardAction) {
    setFirstMenuItemIndex(pane);
  }
  return pane;
}

/**
 * Gets the pane information about the currently pointed submenu item.
 */
function getSubmenuPane(): MenuPaneInfo | null {
  const state = store.getState().appMenu;
  if (state.openPanes.length === 0) {
    // --- No menu panes open
    return null;
  }
  const pane = state.openPanes.slice(0).pop();
  if (pane.selectedIndex < 0) {
    // --- No selected item
    return null;
  }

  const item = flattenCommandGroup(pane.items)[pane.selectedIndex];
  if (item.items.length === 0) {
    // --- Selected item is not submenu
    return null;
  }

  // --- Create the new menu pane
  const position = getSelectedItemPosition();
  if (!position) {
    return null;
  }

  // --- Get MenuPane position
  const paneDim = panes[state.openPanes.length - 1];
  const newPane: MenuPaneInfo = {
    id: nextPaneId++,
    parentIndex: pane.selectedIndex,
    items: item.items,
    leftPos: pane.leftPos + paneDim.width,
    topPos: position.top + paneDim.top - 8,
    selectedIndex: -1
  };
  if (state.keyboardAction) {
    setFirstMenuItemIndex(newPane);
  }
  return newPane;
}

/**
 * Gets the position of the selected item
 * @returns Left and top position of the selected item, if there is any
 * item selected; otherwise, null.
 */
function getSelectedItemPosition(): { left: number; top: number } | null {
  const state = store.getState().appMenu;
  if (state.openPanes.length === 0) {
    return null;
  }
  const pane = state.openPanes.slice(0).pop();
  if (pane.selectedIndex < 0) {
    return null;
  }
  const flattened = flattenCommandGroup(pane.items);
  const { left, top } = paneItems[state.openPanes.length - 1][
    flattened[pane.selectedIndex].index
  ];
  return {
    left,
    top
  };
}

/**
 * Gets the index of the first available menu item
 * @param pane Menu pane information
 */
function setFirstMenuItemIndex(pane: MenuPaneInfo): void {
  const items = flattenCommandGroup(pane.items);
  let selectedIndex = -1;
  for (let i = 0; i < items.length; i++) {
    if (!items[i].separator && items[i].enabled) {
      selectedIndex = i;
      break;
    }
  }
  pane.selectedIndex = selectedIndex;
}

/**
 * Finds the item that has a particular access key.
 * @param code Access key code
 * @param items Items to search
 */
function findAccKey(code: string, items: UiMenuItem[]): number {
  code = code.toLowerCase();
  return flattenCommandGroup(items).findIndex(
    item =>
      item.accessKey &&
      ("key" + item.accessKey.toLowerCase() === code ||
        "digit" + item.accessKey.toLowerCase() === code ||
        "numpad" + item.accessKey.toLowerCase() === code)
  );
}

/**
 * Executes the action of the currently selected menu item
 */
function menuItemAction(): void {
  // --- Try to open the submenu of the current item and complete if succeeded
  if (tryOpenSubmenuPane()) {
    return;
  }

  // --- Open the top level menu pane
  const state = store.getState().appMenu;
  if (state.openPanes.length === 0) {
    store.dispatch(
      menuButtonSet(
        state.selectedIndex,
        getButtonPane(state.selectedIndex),
        true
      )
    );
    return;
  }

  // --- Get the current menu item
  const pane = state.openPanes[state.openPanes.length - 1];
  if (pane.selectedIndex < 0) {
    // --- No selected item
    return;
  }

  // --- Execute the selected and enabled menu item.
  executeMenuItem(flattenCommandGroup(pane.items)[pane.selectedIndex]);
  return;
}

/**
 * Executes the specified menu item, provided, it is executable.
 * @param item Menu item to executes
 */
function executeMenuItem(item: UiMenuItem): void {
  console.log("executeMenuItem");
  console.log(item);
  if (item.items.length === 0 && !item.separator) {
    store.dispatch(menuCloseAll());
    // executeMenuItem(item.id);
  }
}
