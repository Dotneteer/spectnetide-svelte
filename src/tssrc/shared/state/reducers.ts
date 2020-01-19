import { WindowState } from "./WindowState";
import { SpectNetAction } from "./redux-core";

/**
 * This reducer manages modal window visibility state
 * @param state Input state
 * @param action Action executed
 */
function modalReducer(
  state: boolean = false,
  { type }: SpectNetAction
): boolean {
  if (type === "MODAL_HIDE") {
    return false;
  } else if (type === "MODAL_SHOW") {
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
    case "MAXIMIZE_APP_WINDOW":
      return "maximized";
    case "MINIMIZE_APP_WINDOW":
      return "minimized";
    case "RESTORE_APP_WINDOW":
      return "normal";
  }
  return state;
}
