import { ipcRenderer } from "electron";
import { MENU_EXEC_CHANNEL } from "@/shared/channel-ids";

/**
 * Executes the specified command.
 * @param id Command ID to execute
 */
export function executeCommand(id: string): void {
  ipcRenderer.send(MENU_EXEC_CHANNEL, id);
}
