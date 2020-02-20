import {
  MenuItemBase,
  StandardMenuItem,
  MenuSeparator
} from "../menu/ui-menu-item";
import { __DARWIN__ } from "@/main/utils/electron-utils";

/**
 * Hides the output pane
 */
export class HideOutputPaneCommand extends MenuItemBase {
  constructor() {
    super("hide-output-pane", __DARWIN__ ? "Hide Panel" : "Hide panel");
  }

  // onExecute(window: BrowserWindow) {
  //   // TODO: Implement this command
  // }
}

/**
 * Moves the output panel to the left
 */
export class OutputPaneLeftCommand extends MenuItemBase {
  constructor() {
    super(
      "output-pane-left",
      __DARWIN__ ? "Move Panel Left" : "Move panel left"
    );
  }

  // onExecute(window: BrowserWindow) {
  //   // TODO: Implement this command
  // }
}

/**
 * Moves the output panel to the right
 */
export class OutputPaneRightCommand extends MenuItemBase {
  constructor() {
    super(
      "output-pane-right",
      __DARWIN__ ? "Move Panel Right" : "Move panel right"
    );
  }

  // onExecute(window: BrowserWindow) {
  //   // TODO: Implement this command
  // }
}

/**
 * Moves the output panel to the bottom
 */
export class OutputPaneBottomCommand extends MenuItemBase {
  constructor() {
    super(
      "output-pane-bottom",
      __DARWIN__ ? "Move Panel To Bottom" : "Move panel to bottom"
    );
  }

  // onExecute(window: BrowserWindow) {
  //   // TODO: Implement this command
  // }
}

/**
 * The context menu of the output pane
 */
export const outputPaneContextMenu = new StandardMenuItem(
  "output-context",
  "output-context"
)
  .append(new HideOutputPaneCommand())
  .append(new MenuSeparator())
  .append(new OutputPaneLeftCommand())
  .append(new OutputPaneRightCommand())
  .append(new OutputPaneBottomCommand());
