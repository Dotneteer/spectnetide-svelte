import { UiMenuItem } from "../menu/ui-menu-item";
import { MenuPaneInfo } from "../menu/MenuPaneInfo";

/**
 * This interface represents the shape of the payload
 */
export interface Payload {
  menu?: UiMenuItem;
  pane?: MenuPaneInfo;
  itemIndex?: number;
  paneIndex?: number;
  keyboardAction?: boolean;
  projectFolder?: string;
  model?: string;
  edition?: string;
  runsInDebugMode?: boolean;
}
