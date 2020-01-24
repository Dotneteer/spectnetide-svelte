import { focusStateReducer } from "./redux-app-focus";
import { windowStateReducer } from "./redux-window-state";
import { appMenuStateReducer } from "./redux-menu-state";

/**
 * The set of reducers we use within this application
 */
export const appReducers = {
    appHasFocus: focusStateReducer,
    windowState: windowStateReducer,
    appMenu: appMenuStateReducer
};
