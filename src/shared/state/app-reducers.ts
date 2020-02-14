import { focusStateReducer } from "./redux-app-focus";
import { windowStateReducer } from "./redux-window-state";
import { appMenuStateReducer } from "./redux-menu-state";
import { activityStateReducer } from "./redux-activity-state";
import { AppWindow } from "@/main/AppWindow";
import { mainCanvasStateReducer } from "./redux-main-canvas-state";

/**
 * The set of reducers we use within this application
 */
export const appReducers = {
  appHasFocus: focusStateReducer,
  windowState: windowStateReducer,
  appMenu: appMenuStateReducer,
  activityBar: activityStateReducer,
  mainCanvas: mainCanvasStateReducer
};

/**
 * Stores the reference to the host browser window
 */
export let appWindow: AppWindow;

/**
 * Sets the referencve to the host browser window
 * @param window Host browser window
 */
export function setAppWindow(window: AppWindow) {
  appWindow = window;
}

