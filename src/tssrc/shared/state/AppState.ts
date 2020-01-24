import { WindowState } from "./redux-window-state";
import { UiMenuItem } from "../menu/ui-menu-item";
import { MenuPaneInfo } from "../menu/MenuPaneInfo";

/**
 * Represents the state of the application
 */
export interface AppState {
  /**
   * Does the app has the focus?
   */
  appHasFocus?: boolean;

  /**
   * Is a modal dialog displayed?
   */
  isModalDisplayed?: boolean;

  /**
   * Application window state
   */
  windowState?: WindowState;

  /**
   * Application menu state
   */
  appMenu?: MenuState;
}

/**
 * Represents the state of application menu
 */
export interface MenuState {
  /**
   * The root of the menu structure
   */
  menu: UiMenuItem;

  /**
   * The index of the pointed menu button in the menu bar
   */
  selectedIndex: number;

  /**
   * Indicates if access keys should be highlighted
   */
  highlightAccessKeys: boolean;

  /**
   * Open menu panes
   */
  openPanes: MenuPaneInfo[];

  /**
   * Indicates if the last action was a keyboard action
   */
  keyboardAction: boolean;
}
