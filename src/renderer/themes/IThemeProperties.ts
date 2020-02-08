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
  "--panel-separator-border": string;

  "--status-bar-background-color": string;
  "--status-bar-color": string;

  "--icon-default-size": string;
  "--icon-default-fill": string;

  "--titlebar-focused-background-color": string;
  "--titlebar-background-color": string;
  "--titlebar-focused-text-color": string;
  "--titlebar-text-color": string;

  "--menu-bar-background-color": string;
  "--menu-active-background-color": string;
  "--menu-text-color": string;
  "--menu-disabled-text-color": string;
  "--menu-selected-background-color": string;
  "--menu-pane-background-color": string;
  "--menu-pane-shadow": string;
  "--menu-selected-background": string;
  "--menu-selected-text-color": string;

  "--activity-icon-color": string;
  "--activity-current-icon-color": string;
  "--activity-current-background-color": string;
}
