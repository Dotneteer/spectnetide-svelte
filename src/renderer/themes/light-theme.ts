import { ITheme } from "./theme-core";

/**
 * 'light' theme properties
 */
export const lightTheme: ITheme = {
  name: "light",
  properties: {
    "--shell-canvas-background-color": "#f0f0f0",
    "--activity-bar-background-color": "#c8c8c8",
    "--sidebar-background-color": "#c0c0c0",
    "--panel-separator-border": "silver",

    "--status-bar-background-color": "#007acc",
    "--status-bar-color": "#c0c0c0",

    "--icon-default-size": "12",
    "--icon-default-fill": "#ffffff",

    "--titlebar-background-color": "#3e3e3e",
    "--titlebar-focused-background-color": "#3c3c3c",
    "--titlebar-text-color": "#dddddd",
    "--titlebar-focused-text-color": "#ffffff",

    "--menu-bar-background-color": "c8c8c8",
    "--menu-active-background-color": "#505050",
    "--menu-text-color": "#ffffff",
    "--menu-disabled-text-color": "#AAAAAA",
    "--menu-selected-background-color": "#094771",
    "--menu-pane-background-color": "#252526",
    "--menu-pane-shadow": "rgb(0, 0, 0) 0px 2px 4px",
    "--menu-selected-background": "#094771",
    "--menu-selected-text-color": "#ffffff",

    "--activity-icon-color": "#cccccc",
    "--activity-current-icon-color": "#ffffff",
    "--activity-current-background-color": "#505050",

    "--output-tab-text-color": "#e7e7e799",
    "--output-tab-active-text-color": "#e7e7e7",
  
    "--slider-color": "#d4d4d440",
    "--slider-active-color": "#d4d4d480",
    "--slider-drag-color": "#d4d4d4a0",

    // "--window-frame-border-color": "transparent",
    // "--window-frame-border-width": "0px",
    // "--window-pane-border-color": "#dcdcdc",
    // "--window-pane-border-width": "1px",
    // "--window-pane-padding": "2px",

    // "--tab-bar-background-color": "#dcdcdc",
    // "--frame-empty-background-color": "#ffffff",

    // "--caption-inactive-background-color": "#dddfea",
    // "--caption-inactive-text-color": "#929292",
    // "--caption-active-background-color": "#dddfea",
    // "--caption-active-text-color": "#333333",
    // "--caption-focus-background-color": "#2477CE",
    // "--caption-focus-color": "#ffffff",

    // "--icon-default-size": "12",
    // "--icon-default-fill": "#202020",

    // "--icon-button-hover-background-color": "#2477CE",
    // "--icon-button-hover-border-color": "#2477CE",
    // "--icon-button-disabled-fill": "#808080",
    // "--icon-button-border": "1px solid #007acc",
    // "--icon-button-pressed-border": "1px solid #2477CE",

    // "--tool-tab-lead-width": "0",
    // "--tool-tab-active-border-color": "#929292",
    // "--tool-tab-inactive-border-color": "transparent",
    // "--tool-tab-border-radius": "0 0 0 0",
    // "--tab-inactive-background-color": "transparent",
    // "--tab-inactive-text-color": "#929292",
    // "--tab-active-background-color": "#ffffff",
    // "--tab-active-text-color": "#333333",
    // "--tab-hover-background-color": "#ffffff",
    // "--tab-hover-text-color": "#2477CE",

    // "--doc-tab-lead-width": "4px",
    // "--doc-tab-active-border-color": "#707070",
    // "--doc-tab-inactive-border-color": "transparent",
    // "--doc-tab-border-radius": "0 12px 0 0",

    // "--splitter-background-color": "#c0c0c0",
    // "--splitter-handle-background-color": "#c0c0c0",
    // "--splitter-size": "4px",
    // "--splitter-handle-size": "64px",

    // "--dock-button-background-color": "#C0C0C0",
    // "--dock-button-border-color": "#A0A0A0",
    // "--dock-button-icon-fill": "#00AAFF",

    // "--suggest-overlay-background-color": "#00AAFF",
    // "--suggest-overlay-text-color": "#ffffff",

    // "--hem-area-background-color": "#e8e8e8",
    // "--hem-area-border-color": "transparent",
    // "--hem-tab-border-color": "#929292",
    // "--hem-tab-border-size": "4px",
    // "--hem-tab-hover-border-color": "#00AAFF",
    // "--hem-tab-text-color": "#929292",

    // "--tooltip-max-width": "200px",
    // "--tooltip-background-color": "#C0C0C0",
    // "--tooltip-text-color": "#333333",
    // "--tooltip-border": "0 solid transparent",
    // "--tooltip-border-radius": "2px",
    // "--tooltip-box-shadow": "0 5px 15px -5px rgba(0, 0, 0, 0.4)",
    // "--tooltip-padding": "2px",
    // "--tooltip-arrow-size": "8px",
    // "--tooltip-arrow-offset": "-8px",

    // "--scrollbar-size": "12px",
    // "--scrollbar-background-color": "unset",
    // "--scrollbar-border-radius": "unset",
    // "--scrollbar-thumb-still-color": "unset",
    // "--scrollbar-thumb-color": "#808080",
    // "--scrollbar-thumb-hover-color": "#a0a0a0",
    // "--scrollbar-animation-time": "800ms",

    // "--dialog-border": "1px solid #007acc",
    // "--dialog-caption-background-color": "#2477CE",
    // "--dialog-caption-text-color": "#333333",
    // "--dialog-body-background": "#f0f0f0",
    // "--dialog-button-panel-border": "1px solid #094771",
    // "--dialog-info-background-color": "#282828",
    // "--dialog-error-background-color": "maroon",

    // "--button-border": "1px solid transparent",
    // "--button-background-color": "#094771",
    // "--button-text-color": "#ffffff",
    // "--button-disabled-background-color": "#383838",
    // "--button-disabled-text-color": "#AAAAAA",
    // "--button-focus-border": "#007acc",

    // "--message-icon-size": "32",
    // "--message-success-color": "green",
    // "--message-warning-color": "orange",
    // "--message-error-color": "red",
    // "--message-info-color": "lightblue",
    // "--list-hover-color": "#2a2d2e",
    // "--list-selected-color": "#094771",
    // "--tree-arrow-color": "#333333",

    // "--input-border": "1px solid #007acc",
    // "--input-background-color": "#ffffff",
    // "--input-text-color": "#333333",
    // "--input-invalid-border": "maroon",
    // "--input-focus-border": "1px solid #009aee",
    // "--input-focus-background-color": "#cccccc",

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
