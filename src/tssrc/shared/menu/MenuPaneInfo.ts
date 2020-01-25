import { UiMenuItem } from "./ui-menu-item";

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
  items: UiMenuItem[];

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
}
