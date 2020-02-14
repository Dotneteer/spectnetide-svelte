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

export const outputSetBottomAction = createAction("OUTPUT_SET_BOTTOM");
export const outputSetLeftAction = createAction("OUTPUT_SET_LEFT");
export const outputSetRightAction = createAction("OUTPUT_SET_RIGHT");
export const outputMaximizeAction = createAction("OUTPUT_MAXIMIZE");
export const outputShowOutputAction = createAction("OUTPUT_SHOW_OUTPUT");
export const outputShowErrorsAction = createAction("OUTPUT_SHOW_ERRORS");
export const outputShowConsoleAction = createAction("OUTPUT_SHOW_CONSOLE");
export const outputRestoreAction = createAction("OUTPUT_RESTORE");
export const outputHideAction = createAction("OUTPUT_HIDE");

/**
 * This reducer manages application window state changes
 * @param state Input state
 * @param action Action executed
 */
export function mainCanvasStateReducer(
  state: MainCanvasState = {
    outputPosition: "bottom",
    chevronPosition: "up",
    restorePosition: "bottom"
  },
  { type }: SpectNetAction
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
    case "OUTPUT_SHOW_OUTPUT":
      return {
        ...state,
        outputPosition:
          state.outputPosition === "hidden"
            ? state.restorePosition
            : state.outputPosition,
        activeTab: "output"
      };
    case "OUTPUT_SHOW_ERRORS":
      return {
        ...state,
        outputPosition:
          state.outputPosition === "hidden"
            ? state.restorePosition
            : state.outputPosition,
        activeTab: "errors"
      };
    case "OUTPUT_SHOW_CONSOLE":
      return {
        ...state,
        outputPosition:
          state.outputPosition === "hidden"
            ? state.restorePosition
            : state.outputPosition,
        activeTab: "console"
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
