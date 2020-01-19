/**
 * This interface represents the shape of the payload
 */
export interface Payload {
  itemIndex?: number;
  paneIndex?: number;
  keyboardAction?: boolean;
  projectFolder?: string;
  model?: string;
  edition?: string;
  runsInDebugMode?: boolean;
}
