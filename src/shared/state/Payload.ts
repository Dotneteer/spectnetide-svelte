import { MenuPaneInfo } from "../menu/MenuPaneInfo";
import { MenuItemBase } from "../menu/ui-menu-item";
import { Activity } from "../activity/Activity";

/**
 * This interface represents the shape of the payload
 */
export interface Payload {
  menu?: MenuItemBase[];
  pane?: MenuPaneInfo;
  itemIndex?: number;
  paneIndex?: number;
  keyboardAction?: boolean;
  projectFolder?: string;
  model?: string;
  edition?: string;
  runsInDebugMode?: boolean;
  activities?: Activity[]
}
