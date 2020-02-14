import { WindowState } from "./redux-window-state";
import { MenuPaneInfo } from "../menu/MenuPaneInfo";
import { MenuItemBase } from "../menu/ui-menu-item";
import { Activity } from "../activity/Activity";
import { OutputPosition, ChevronPosition, OutputPanes, OutputPaneInfo } from "./redux-main-canvas-state";

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

  /**
   * The ID of the current activity
   */
  activityBar?: ActivityBarState

  /**
   * The state of the main canvas
   */
  mainCanvas?: MainCanvasState;

  /**
   * The state of the context menu
   */
  contextMenu?: MenuPaneInfo;
}

/**
 * Represents the state of application menu
 */
export interface MenuState {
  /**
   * The root of the menu structure
   */
  menu?: MenuItemBase[];

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

/**
 * Represents the state of the activity bar
 */
export interface ActivityBarState {
  /**
   * The list of activities to display
   */
  activities?: Activity[];

  /**
   * The index of the active activity
   */
  activeIndex?: number;

  /**
   * The index of activity the mouse points to
   */
  pointedIndex?: number;
}

/**
 * Represents the state of the main canvas
 */
export interface MainCanvasState {
  /**
   * State of the output pane
   */
  outputPosition?: OutputPosition;

  /**
   * State of the chevron in the output pane
   */
  chevronPosition?: ChevronPosition;

  /**
   * The position of the output pane after
   * hidden or maximized states
   */
  restorePosition?: OutputPosition;

  /**
   * The identifier of the active output pane tab
   */
  activeTab?: OutputPanes;

  /**
   * Current output panes
   */
  tabsStates: {[key: string]: OutputPaneInfo}
}
