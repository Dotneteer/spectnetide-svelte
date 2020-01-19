import { SpectNetAction } from "./actions";
/**
 * The signature of an action creator function.
 */
export type ActionCreator = (...args: any) => SpectNetAction;
