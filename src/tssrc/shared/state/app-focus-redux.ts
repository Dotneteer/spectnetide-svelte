import { createAliasedAction, SpectNetAction } from "./redux-core";

/**
 * Creates an action for signing that this application got the focus
 */
export const appGotFocusAction = createAliasedAction("APP_GOT_FOCUS");

/**
 * Creates an action for signing that this application lost the focus
 */
export const appLostFocusAction = createAliasedAction("APP_LOST_FOCUS");

/**
 * This reducer manages application window state changes
 * @param state Input state
 * @param action Action executed
 */
export function focusStateReducer(
  state: boolean = false,
  { type }: SpectNetAction
): boolean {
  switch (type) {
    case "APP_GOT_FOCUS":
      return true;
    case "APP_LOST_FOCUS":
      return false;
  }
  return state;
}
