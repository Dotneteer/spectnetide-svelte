import { menuAltPressed, menuAltReleased } from "../../shared/state/actions";
import { rendererProcessStore } from "../rendererProcessStore";
import {
  menuPaneCloseAction,
  menuButtonSetAction,
  menuPaneOpenAction,
  menuItemDownAction,
  menuItemUpAction,
  menuItemSelectAction,
  menuCloseAllAction,
  menuButtonClickAction,
  menuKeepPaneAction
} from "../../shared/state/redux-menu-state";
import { MenuPaneInfo } from "../../shared/menu/MenuPaneInfo";
import { ElementRectangle } from "./ElementRectangle";
import { flattenCommandGroup } from "./menu-pane-logic";
import { UiMenuItem } from "../../shared/menu/ui-menu-item";

/**
 * Represents the event data when a menu item is pointed with the mouse.
 */
interface ItemPointedArgs {
  // --- Pane depth
  depth: number;

  // --- flattened index
  flatIndex: number;
}

// --- This is the store we use to dispatch redux actions
const store = rendererProcessStore;

// --- Index of menu pade marked for delayed remove
let delayedRemove = -1;

// ---
let lastSubmenuParent = -1;

// --- Menu button boundary information
const menuButtons: ElementRectangle[] = [];

// --- Pane information of open panes
const panes: ElementRectangle[] = [];

// --- Menu item boundary information
// --- (first index: pane, second index: item within a pane)
const paneItems: ElementRectangle[][] = [];

// --- Create a new sequence number for a new pane
let nextPaneId = 0;

// --- Store information about the last mouse entered event
let lastMouseEntered: ItemPointedArgs | undefined;

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
export function handleItemPointed(args: ItemPointedArgs): void {
  if (
    lastMouseEntered &&
    lastMouseEntered.depth === args.depth &&
    lastMouseEntered.flatIndex === args.flatIndex
  ) {
    // --- No change, event is raised because of re-rendering
    return;
  }
  lastMouseEntered = args;

  // --- Check for delayed remove
  const state = store.getState().appMenu;

  if (delayedRemove < 0 && args.depth < state.openPanes.length - 1) {
    // --- We're about to remove a displayed submenu pane. Let allow the user move
    // --- with the mouse for a little time before hiding the submenu item.
    delayedRemove = state.openPanes.length - 1;
    lastSubmenuParent = state.openPanes[delayedRemove].parentIndex;
    setTimeout(() => {
      // --- We remove the last submenu if the last mouse point is not on the submenu or
      // --- the parent menu item.
      if (
        lastMouseEntered &&
        lastMouseEntered.depth < delayedRemove &&
        state.openPanes[delayedRemove - 1].selectedIndex !== lastSubmenuParent
      ) {
        store.dispatch(menuKeepPaneAction(lastMouseEntered.depth));
      }
      delayedRemove = -1;
    }, 400);
  }

  
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
    store.dispatch(menuPaneCloseAction());
    return;
  }

  // --- Move one step to left or close the open pane
  if (ev.code === "ArrowLeft") {
    // --- More than one menu pane is open, close the last one
    if (state.openPanes.length > 1) {
      store.dispatch(menuPaneCloseAction());
      return;
    }

    // --- Move to the left
    let index = state.selectedIndex - 1;
    if (index < 0) {
      index = state.menu.items.length - 1;
    }

    // --- Open the pane of the menu button
    const pane = state.openPanes.length > 0 ? getButtonPane(index) : undefined;
    store.dispatch(menuButtonSetAction(index, pane, true));
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
    store.dispatch(menuButtonSetAction(index, pane, true));
    lastMouseEntered = undefined;
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
        menuButtonSetAction(
          state.selectedIndex,
          getButtonPane(state.selectedIndex),
          true
        )
      );
      return;
    }

    // --- Move down one item
    store.dispatch(menuItemDownAction());
    return;
  }

  if (ev.code === "ArrowUp") {
    // --- Move up one item
    store.dispatch(menuItemUpAction());
    return;
  }

  // --- Do we need to check accelarator keys?
  if (!state.highlightAccessKeys) {
    return;
  }

  if (state.openPanes.length > 0) {
    const pane = state.openPanes[state.openPanes.length - 1];
    const pressedIndex = findAccKey(ev.code, flattenCommandGroup(pane.items));
    if (pressedIndex >= 0) {
      store.dispatch(menuItemSelectAction(pressedIndex));
      setTimeout(() => {
        menuItemAction();
      }, 100);
    }
  } else {
    // --- We're looking for the accelerator key of a main menu item.
    const pressedIndex = findAccKey(ev.code, state.menu.items);
    console.log(`Pressed index: ${pressedIndex}`);
    if (pressedIndex >= 0) {
      // --- Accelerator key found, set the main menu item to display
      let pane =
        state.openPanes.length === 0 ? getButtonPane(pressedIndex) : undefined;
      console.log(pane);
      store.dispatch(menuButtonSetAction(pressedIndex, pane, true));
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

/**
 * Handles the event when the mouse enters a menu button.
 * @param index Button index
 */
export function handleButtonMouseEnter(index: number): void {
  console.log(`Mouse entered: ${index}`);
  const state = store.getState().appMenu;
  const pane = state.openPanes.length > 0 ? getButtonPane(index) : undefined;
  store.dispatch(menuButtonSetAction(index, pane, false));
  lastMouseEntered = undefined;
}

/**
 * Handles the event when a menu button is clicked.
 * @param index button index
 */
export function handleButtonClick(index: number): void {
  store.dispatch(
    menuButtonClickAction(
      store.getState().appMenu.openPanes.length > 0
        ? undefined
        : getButtonPane(index),
      index
    )
  );
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
    store.dispatch(menuPaneOpenAction(subMenuPane, true));
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
  return items.findIndex(
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
      menuButtonSetAction(
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
    store.dispatch(menuCloseAllAction());
    // executeMenuItem(item.id);
  }
}
