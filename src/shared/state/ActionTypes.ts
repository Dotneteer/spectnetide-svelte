/**
 * Available action types
 */
export interface ActionTypes {
  // --- Aliased action
  ALIASED: null;

  // --- App focus actions
  APP_GOT_FOCUS: null,
  APP_LOST_FOCUS: null,

  // --- Modal dialog state actions
  MODAL_SHOW: null,
  MODAL_HIDE: null,

  // --- Main window state actions
  MAXIMIZE_APP_WINDOW: null,
  MINIMIZE_APP_WINDOW: null,
  RESTORE_APP_WINDOW: null,

  // --- Menu actions
  SET_MENU: null,
  REFRESH_MENU: null,
  TOGGLE_DEV_TOOLS: null,
  MENU_ALT_PRESSED: null,
  MENU_ALT_RELEASED: null,
  MENU_BUTTON_SET: null,
  MENU_BUTTON_MOUSE_ENTER: null,
  MENU_BUTTON_CLICK: null,
  MENU_PANE_CLOSE: null,
  MENU_ITEM_SELECT: null,
  MENU_ITEM_DOWN: null,
  MENU_ITEM_UP: null,
  MENU_PANE_OPEN: null,
  MENU_KEEP_PANES: null,
  MENU_ITEM_POINT: null,
  MENU_CLOSE_ALL: null,
  SET_MODAL: null,

  // --- Activity bar actions
  SET_ACTIVITIES: null;
  REFRESH_ACTIVITIES: null;
  CHANGE_ACTIVITY: null;
  POINT_ACTIVITY: null;
};
