import { SpectNetAction } from "./redux-core";
import { WindowState } from "./redux-window-state";

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
