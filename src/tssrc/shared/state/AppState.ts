import { WindowState } from "./WindowState";

/**
 * Represents the stateof the application
 */
export interface AppState {
    /**
     * Does the app has the focus?
     */
    appHasFocus?: boolean;

    /**
     * Is a modal dialog displayed?
     */
    isModalDisplayed?: boolean;

    /**
     * Application window state
     */
    windowState?: WindowState;
}