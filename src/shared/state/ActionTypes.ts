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

  // --- Main canvas actions
  OUTPUT_SET_BOTTOM: null,
  OUTPUT_SET_LEFT: null,
  OUTPUT_SET_RIGHT: null,
  OUTPUT_HIDE: null,
  OUTPUT_SHOW_OUTPUT: null,
  OUTPUT_SHOW_ERRORS: null,
  OUTPUT_SHOW_CONSOLE: null,
  OUTPUT_MAXIMIZE: null,
  OUTPUT_RESTORE: null,
  OUTPUT_SET_PANE_PROPS: null,

  // --- Context menu actions
  CONTEXT_MENU_SHOW: null,
  CONTEXT_MENU_HIDE: null,
  CONTEXT_MENU_MOUNTED: null,
  CONTEXT_MENU_ITEM_SELECT: null,
  CONTEXT_MENU_ITEM_DOWN: null,
  CONTEXT_MENU_ITEM_UP: null,
  CONTEXT_MENU_ITEM_POINT: null,
};
