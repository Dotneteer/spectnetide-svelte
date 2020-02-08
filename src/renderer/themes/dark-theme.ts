import { ITheme } from "./theme-core";

/**
 * This constant value defins the propertief of the 'dark' theme.
 */
export const darkTheme: ITheme = {
  name: "dark",
  properties: {
    "--shell-canvas-background-color": "#1E1E1E",
    "--activity-bar-background-color": "#333333",
    "--sidebar-background-color": "#252526",
    "--panel-separator-border": "#8080805a",

    "--status-bar-background-color": "#007acc",
    "--status-bar-color": "#ffffff",

    "--icon-default-size": "12",
    "--icon-default-fill": "#ffffff",

    "--titlebar-background-color": "#333333",
    "--titlebar-focused-background-color": "#3c3c3c",
    "--titlebar-text-color": "#ffffffc0",
    "--titlebar-focused-text-color": "#ffffffe0",

    "--menu-bar-background-color": "#3c3c3c",
    "--menu-active-background-color": "#505050",
    "--menu-text-color": "#ffffffc0",
    "--menu-disabled-text-color": "#AAAAAA",
    "--menu-selected-background-color": "#094771",
    "--menu-pane-background-color": "#252526",
    "--menu-pane-shadow": "rgb(0, 0, 0) 0px 2px 4px",
    "--menu-selected-background": "#094771",
    "--menu-selected-text-color": "#ffffff",

    "--activity-icon-color": "#ffffff66",
    "--activity-current-icon-color": "#ffffff",
    "--activity-current-background-color": "#505050",


    // "--window-frame-border-color": "transparent",
    // "--window-frame-border-width": "0px",
    // "--window-pane-border-color": "transparent",
    // "--window-pane-border-width": "1px",
    // "--window-pane-padding": "0px",

    // "--tab-bar-background-color": "#383838",
    // "--frame-empty-background-color": "#101010",

    // "--caption-inactive-background-color": "#37373d",
    // "--caption-inactive-text-color": "#8a8a8a",
    // "--caption-active-background-color": "#37373d",
    // "--caption-active-text-color": "#ffffff",
    // "--caption-focus-background-color": "#094771",
    // "--caption-focus-color": "#eeeeee",

    // "--icon-default-size": "12",
    // "--icon-default-fill": "#ffffff",

    // "--icon-button-hover-background-color": "#00AAFF",
    // "--icon-button-hover-border-color": "#00AAFF",
    // "--icon-button-disabled-fill": "#707070",
    // "--icon-button-border": "1px solid #007acc",
    // "--icon-button-pressed-border": "1px solid #094771",

    // "--tool-tab-lead-width": "0px",
    // "--tool-tab-active-border-color": "#37373d",
    // "--tool-tab-inactive-border-color": "transparent",
    // "--tool-tab-border-radius": "0 0 0 0",

    // "--tab-inactive-background-color": "transparent",
    // "--tab-inactive-text-color": "#AAAAAA",
    // "--tab-active-background-color": "#1E1E1E",
    // "--tab-active-text-color": "#ffffff",
    // "--tab-hover-background-color": "#1E1E1E",
    // "--tab-hover-text-color": "#00AAFF",

    // "--doc-tab-lead-width": "0px",
    // "--doc-tab-active-border-color": "transparent",
    // "--doc-tab-inactive-border-color": "transparent",
    // "--doc-tab-border-radius": "0 12px 0 0",

    // "--splitter-background-color": "#282828",
    // "--splitter-handle-background-color": "#282828",
    // "--splitter-size": "4px",
    // "--splitter-handle-size": "64px",

    // "--dock-button-background-color": "#101010",
    // "--dock-button-border-color": "#404040",
    // "--dock-button-icon-fill": "#00AAFF",

    // "--suggest-overlay-background-color": "#00AAFF",
    // "--suggest-overlay-text-color": "#ffffff",

    // "--hem-area-background-color": "#282828",
    // "--hem-area-border-color": "transparent",
    // "--hem-tab-border-color": "#AAAAAA",
    // "--hem-tab-border-size": "4px",
    // "--hem-tab-hover-border-color": "#00AAFF",
    // "--hem-tab-text-color": "#8a8a8a",

    // "--tooltip-max-width": "200px",
    // "--tooltip-background-color": "#094771",
    // "--tooltip-text-color": "#ffffff",
    // "--tooltip-border": "0px solid transparent",
    // "--tooltip-border-radius": "4px",
    // "--tooltip-box-shadow": "0 7px 15px -5px rgba(0, 0, 0, 0.4)",
    // "--tooltip-padding": "2px 6px 4px 6px",
    // "--tooltip-arrow-size": "5px",
    // "--tooltip-arrow-offset": "-5px",

    // "--scrollbar-size": "12px",
    // "--scrollbar-background-color": "unset",
    // "--scrollbar-border-radius": "unset",
    // "--scrollbar-thumb-still-color": "unset",
    // "--scrollbar-thumb-color": "#808080",
    // "--scrollbar-thumb-hover-color": "#a0a0a0",
    // "--scrollbar-animation-time": "800ms",

    // "--dialog-border": "1px solid #007acc",
    // "--dialog-caption-background-color": "#094771",
    // "--dialog-caption-text-color": "#ffffff",
    // "--dialog-body-background": "#1E1E1E",
    // "--dialog-button-panel-border": "1px solid #094771",
    // "--dialog-info-background-color": "#383838",
    // "--dialog-error-background-color": "maroon",

    // "--button-border": "1px solid transparent",
    // "--button-background-color": "#094771",
    // "--button-text-color": "#ffffff",
    // "--button-disabled-background-color": "#383838",
    // "--button-disabled-text-color": "#AAAAAA",
    // "--button-focus-border": "1px solid #007acc",

    // "--message-icon-size": "64",
    // "--message-success-color": "green",
    // "--message-warning-color": "orange",
    // "--message-error-color": "red",
    // "--message-info-color": "darkcyan",

    // "--list-hover-color": "#2a2d2e",
    // "--list-selected-color": "#094771",
    // "--tree-arrow-color": "#aaaaaa",

    // "--input-border": "1px solid #007acc",
    // "--input-background-color": "#181818",
    // "--input-text-color": "#ffffff",
    // "--input-invalid-border": "red",
    // "--input-focus-border": "1px solid #009aee",
    // "--input-focus-background-color": "#282828",

    // "--menu-text-color": "#ffffff",
    // "--menu-disabled-text-color": "#AAAAAA",
    // "--menu-active-background-color": "#505050",
    // "--menu-selected-background-color": "#094771",
    // "--menu-pane-background-color": "#252526",
    // "--menu-pane-shadow": "rgb(0, 0, 0) 0px 2px 4px",
    // "--menu-selected-background": "#094771",
    // "--menu-selected-text-color": "#ffffff",

    // "--color-green": "#51c351",
    // "--color-orange": "#f89406",
    // "--color-blue": "#00afff"
  }
};
