/**
 * Defines the properties of the themes that can be used with SpentNetEls.
 */
export interface IThemeProperties {
    /**
     * The background color of the shell canvas.
     */
    "--shell-canvas-background-color": string;
    "--activity-bar-background-color": string;
    "--sidebar-background-color": string;

    "--status-bar-background-color": string;
    "--status-bar-color": string;

    "--menu-bar-background-color": string;
    "--menu-active-background-color": string;

    "--titlebar-focused-background-color": string;
    "--titlebar-background-color": string;
    "--titlebar-focused-text-color": string;
    "--titlebar-text-color": string;
}  