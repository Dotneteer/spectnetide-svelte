import { createAction, SpectNetAction } from "./redux-core";
import { MainCanvasState } from "./AppState";

/**
 * Represents the available positions of the output frame
 */
export type OutputPosition =
  | "left"
  | "bottom"
  | "right"
  | "hidden"
  | "maximized";

/**
 * Represents the available positions of the chevron
 */
export type ChevronPosition = "left" | "right" | "up" | "down";

/**
 * Represents the panes of the output
 */
export type OutputPanes = "errors" | "output" | "console";

/**
 * Represents the information about an output pane.
 */
export interface OutputPaneInfo {
  /**
   * Indicates if the "clear all" button is visible.
   */
  isClearVisible?: boolean;

  /**
   * Indicates if the "scroll lock" button is visible.
   */
  isScrollLockVisible?: boolean;

  /**
   * Indicates if scroll is locked.
   */
  scrollLock?: boolean;
}

export const outputSetBottomAction = createAction("OUTPUT_SET_BOTTOM");
export const outputSetLeftAction = createAction("OUTPUT_SET_LEFT");
export const outputSetRightAction = createAction("OUTPUT_SET_RIGHT");
export const outputMaximizeAction = createAction("OUTPUT_MAXIMIZE");
export function outputShowPaneAction(activeTab: OutputPanes) {
  return {
    type: "OUTPUT_SHOW_PANE",
    payload: { activeTab }
  };
}

export const outputRestoreAction = createAction("OUTPUT_RESTORE");
export const outputHideAction = createAction("OUTPUT_HIDE");

export function outputScrollLockAction(
  activeTab: OutputPanes,
  turnedOn: boolean
) {
  return {
    type: "OUTPUT_SCROLL_LOCK",
    payload: {
      activeTab,
      turnedOn
    }
  };
}

/**
 * Displays the context meno
 * @param pane Menu pane information
 */
export function outputSetPropsAction(
  activeTab: OutputPanes,
  props: OutputPaneInfo
): SpectNetAction {
  return {
    type: "OUTPUT_SET_PANE_PROPS",
    payload: {
      activeTab,
      props
    }
  };
}

/**
 * This reducer manages application window state changes
 * @param state Input state
 * @param action Action executed
 */
export function mainCanvasStateReducer(
  state: MainCanvasState = {
    outputPosition: "bottom",
    chevronPosition: "up",
    restorePosition: "bottom",
    tabsStates: {}
  },
  { type, payload }: SpectNetAction
): MainCanvasState {
  switch (type) {
    case "OUTPUT_SET_BOTTOM":
      return {
        ...state,
        outputPosition: "bottom",
        chevronPosition: "up",
        restorePosition: "bottom"
      };
    case "OUTPUT_SET_LEFT":
      return {
        ...state,
        outputPosition: "left",
        chevronPosition: "right",
        restorePosition: "left"
      };
    case "OUTPUT_SET_RIGHT":
      return {
        ...state,
        outputPosition: "right",
        chevronPosition: "left",
        restorePosition: "right"
      };
    case "OUTPUT_HIDE":
      const restorePosition =
        state.outputPosition === "hidden" ||
        state.outputPosition === "maximized"
          ? state.restorePosition
          : state.outputPosition;
      return {
        ...state,
        outputPosition: "hidden",
        chevronPosition: getChevronPosition(restorePosition),
        restorePosition: restorePosition
      };
    case "OUTPUT_SHOW_PANE":
      return {
        ...state,
        outputPosition:
          state.outputPosition === "hidden"
            ? state.restorePosition
            : state.outputPosition,
        activeTab: payload.activeTab
      };
    case "OUTPUT_RESTORE":
      return {
        ...state,
        chevronPosition: getChevronPosition(state.restorePosition),
        outputPosition: state.restorePosition
      };
    case "OUTPUT_MAXIMIZE":
      return {
        ...state,
        outputPosition: "maximized",
        restorePosition:
          state.outputPosition === "hidden"
            ? state.restorePosition
            : state.outputPosition,
        chevronPosition:
          state.outputPosition === "hidden"
            ? state.restorePosition === "left"
              ? "left"
              : state.restorePosition === "right"
              ? "right"
              : "down"
            : state.outputPosition === "left"
            ? "left"
            : state.outputPosition === "right"
            ? "right"
            : "down"
      };
    case "OUTPUT_SCROLL_LOCK":
      return {
        ...state,
        tabsStates: {
          ...state.tabsStates,
          [payload.activeTab]: {
            ...state.tabsStates[payload.activeTab],
            scrollLock: payload.turnedOn
          }
        }
      };
    case "OUTPUT_SET_PANE_PROPS":
      return {
        ...state,
        tabsStates: { ...state.tabsStates, [payload.activeTab]: payload.props }
      };
  }
  return state;
}

/**
 * Calculates the chevron position according to the current unmaximized
 * pane position.
 * @param position Pane position
 */
function getChevronPosition(position: OutputPosition): ChevronPosition {
  switch (position) {
    case "left":
      return "right";
    case "right":
      return "left";
    case "bottom":
      return "up";
  }
}
