import { WindowState } from "./WindowState";

/**
 * Represents the stateof the application
 */
export interface IAppState {

    isModalDisplayed?: boolean;

    /**
     * Application window state
     */
    windowState?: WindowState;
}