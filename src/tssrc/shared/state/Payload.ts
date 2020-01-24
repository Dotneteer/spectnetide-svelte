import { UiMenuItem } from "../menu/ui-menu-item";

/**
 * This interface represents the shape of the payload
 */
export interface Payload {
  menu?: UiMenuItem;
  itemIndex?: number;
  paneIndex?: number;
  keyboardAction?: boolean;
  projectFolder?: string;
  model?: string;
  edition?: string;
  runsInDebugMode?: boolean;
}
