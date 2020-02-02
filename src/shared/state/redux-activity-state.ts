import { Activity } from "../activity/Activity";
import { SpectNetAction, createAliasedAction } from "./redux-core";
import { ActivityBarState } from "./AppState";
import { appWindow } from "./app-reducers";

/**
 * Creates an action for setting the activity bar contents
 * @param activity List of activities to set
 */
export function setActivitiesAction(activities: Activity[]): SpectNetAction {
  return {
    type: "SET_ACTIVITIES",
    payload: {
      activities
    }
  };
}

/**
 * Creates an action for refreshing activities
 */
export const refreshMenuAction = createAliasedAction("REFRESH_ACTIVITIES", () => {
  if (appWindow) {
    appWindow.refreshActivityBar();
  }
  return {
    type: "REFRESH_ACTIVITIES"
  };
});

/**
 * Creates an action for setting the activity bar contents
 * @param activity List of activities to set
 */
export function changeActivityAction(itemIndex: number): SpectNetAction {
  return {
    type: "CHANGE_ACTIVITY",
    payload: {
      itemIndex
    }
  };
}

/**
 * Creates an action for setting the activity bar contents
 * @param activity List of activities to set
 */
export function pointActivityAction(itemIndex: number): SpectNetAction {
  return {
    type: "POINT_ACTIVITY",
    payload: {
      itemIndex
    }
  };
}

/**
 * This reducer manages application window state changes
 * @param state Input state
 * @param action Action executed
 */
export function activityStateReducer(
  state: ActivityBarState = null,
  { type, payload }: SpectNetAction
): ActivityBarState {
  switch (type) {
    case "SET_ACTIVITIES":
      return {
        ...state,
        activities: payload.activities,
        activeIndex: -1,
        pointedIndex: -1
      };
    case "CHANGE_ACTIVITY":
      return { ...state, activeIndex: payload.itemIndex };
    case "POINT_ACTIVITY":
      return { ...state, pointedIndex: payload.itemIndex };
  }
  return state;
}
