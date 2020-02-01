import { Activity } from "../../shared/activity/Activity";
import { LiteEvent, ILiteEvent } from "@/shared/menu/utils/LiteEvent";

/**
 * This class implements the ActivityService
 */
class ActivityServiceClass {
  private _activities: Activity[];
  private _activitiesChanged = new LiteEvent<Activity[]>();

  constructor() {
    this.reset();
  }

  /**
   * Resets the service to its initial state.
   */
  reset(): void {
    this._activities = [];
  }

  /**
   * Registers the specified activity.
   * @param activity Activity to register
   */
  registerActivity(activity: Activity): void {
    if (this._activities.some(a => a.id === activity.id)) {
      throw new Error(`Activity with ID ${activity.id} is already registered.`);
    }
    this._activities.push(activity);
    this._activitiesChanged.fire(this.activities.slice(0));
  }

  /**
   * Gets a shallow clone of registered activities.
   */
  get activities(): Activity[] {
    return this._activities.slice(0);
  }

  /**
   * This event is raised whec the active activity changed.
   */
  get activitiesChanged(): ILiteEvent<Activity[]> {
    return this._activitiesChanged;
  }
}

/**
 * This singleton instance of ActivityServiceClass
 */
export const ActivityService = new ActivityServiceClass();
