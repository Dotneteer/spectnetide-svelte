// ============================================================================
// Code-behid logic for the ContextMenu Svelte component

import { contextMenuStore } from "../stores/context-menu-store";
import {
  ItemPointedArgs,
  MenuPaneInfo,
  getNextMenuItemIndex
} from "@/shared/menu/MenuPaneInfo";

let onExecute: ((id: string) => void) | undefined;

/**
 * Sets the callback function to execute a menu command
 * @param callback Callback to execute a menu command
 */
export function setOnExecute(callback: (id: string) => void): void {
  onExecute = callback;
}

/**
 * Responds to keydown events
 * @param pane The context menu pane state
 * @param ev Event arguments
 */
export function handleKeyDown(
  pane: MenuPaneInfo | undefined,
  ev: KeyboardEvent
) {
  if (!pane) return;

  switch (ev.code) {
    case "Escape":
      // --- Hide the context menu
      contextMenuStore.hide();
      return;

    case "ArrowDown":
      if (pane.selectedIndex < 0) {
        // --- No item has been selected, go to the first one.
        for (let i = 0; i < pane.items.length; i++) {
          if (pane.items[i].type !== "separator" && pane.items[i].enabled) {
            contextMenuStore.selectItem(i);
            break;
          }
        }
      } else {
        // --- Move to the next item
        contextMenuStore.selectItem(getNextMenuItemIndex(pane, 1));
      }
      return;

    case "ArrowUp":
      if (pane.selectedIndex < 0) {
        // --- No item has been selected, go to the last one.
        for (let i = pane.items.length - 1; i >= 0; i--) {
          if (pane.items[i].type !== "separator" && pane.items[i].enabled) {
            contextMenuStore.selectItem(i);
            break;
          }
        }
      } else {
        // --- Move to the last item
        contextMenuStore.selectItem(getNextMenuItemIndex(pane, -1));
      }
      return;

    case "Enter":
      // --- It's time to execute the selected item
      executeSelectedItem(pane, pane.selectedIndex);
      return;
  }
}

/**
 * Follow the item pointed by the mouse
 * @param args Info about the pointed item.
 */
export function handleItemPointed(args: ItemPointedArgs) {
  contextMenuStore.selectItem(args.flatIndex);
}

/**
 * Executes the clicked menu command
 * @param pane Pane state information
 * @param args Info about the clicked item.
 */
export function handleItemClicked(
  pane: MenuPaneInfo | undefined,
  args: ItemPointedArgs
) {
  if (!pane) return;
  executeSelectedItem(pane, args.flatIndex);
}

/**
 * Execute the menu command
 * @param pane Pane state information
 * @param index Selected item index
 */
function executeSelectedItem(pane: MenuPaneInfo, index: number): void {
  const item = pane.items[index];
  contextMenuStore.hide();
  if (onExecute) {
    onExecute(item.id);
  }
}
