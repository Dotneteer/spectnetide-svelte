import { SpectNetAction } from "./actions";
import { ActionTypes } from "./ActionTypes";
import { WindowState } from "./WindowState";

/**
 * This reducer manages modal window visibility state
 * @param state Input state
 * @param action Action executed
 */
function modalReducer(
  state: boolean = false,
  { type }: SpectNetAction
): boolean {
  if (type === ActionTypes.MODAL_HIDE) {
    return false;
  } else if (type === ActionTypes.MODAL_SHOW) {
    return true;
  }
  return state;
}

/**
 * This reducer manages application window state changes
 * @param state Input state
 * @param action Action executed
 */
function windowStateReducer(
  state: WindowState = null,
  { type }: SpectNetAction
): WindowState {
  switch (type) {
    case ActionTypes.MAXIMIZE_APP_WINDOW:
      return "maximized";
    case ActionTypes.MINIMIZE_APP_WINDOW:
      return "minimized";
    case ActionTypes.RESTORE_APP_WINDOW:
      return "normal";
  }
  return state;
}


/**
 * The set of reducers we use within this application
 */
export const appReducers = {
  isModalDisplayed: modalReducer,
  windowState: windowStateReducer
};
