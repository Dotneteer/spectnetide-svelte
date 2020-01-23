import { focusStateReducer } from "./app-focus-redux";
import { windowStateReducer } from "./window-state-redux";
/**
 * The set of reducers we use within this application
 */
export const appReducers = {
    appHasFocus: focusStateReducer,
    windowState: windowStateReducer
};
