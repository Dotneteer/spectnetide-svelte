import { MenuItemDescriptor } from "./ui-menu-item";

/**
 * This class describes information about menu panes opened in the main menu.
 */
export class MenuPaneInfo {
  /**
   * Unique pane ID.
   */
  id: number;
  /**
   * The index of the item in the parent, if this is a submenu pane
   */
  parentIndex: number;

  /**
   * Menu items in the pane
   */
  items: MenuItemDescriptor[];

  /**
   * Left position in pixels
   */
  leftPos: number;

  /**
   * Top position in pixesl
   */
  topPos: number;

  /**
   * Selectem item's index
   */
  selectedIndex: number;

  /**
   * Width optionally set after the pane is displayed
   */
  width?: number;

  /**
   * Height optionally set after the pane is displayed
   */
  height?: number;
}

/**
 * Represents the event data when a menu item is pointed with the mouse.
 */
export interface ItemPointedArgs {
  // --- Pane depth
  depth: number;

  // --- flattened index
  flatIndex: number;
}


/**
 * Gets the next menu item index
 * @param pane Menu pane information
 * @param step Step (-1: previous item, 1: next item)
 */
export function getNextMenuItemIndex(pane: MenuPaneInfo, step: number): number {
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
