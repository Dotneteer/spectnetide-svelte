import { writable } from "svelte/store";
import { rendererProcessStore } from "../rendererProcessStore";
import { MenuPaneInfo } from "@/shared/menu/MenuPaneInfo";
import { menuCloseAllAction } from "@/shared/state/redux-menu-state";

/**
 * Represents the context menu stor
 */
export interface ContextMenuStore {
  /**
   * Request displaying the specified context menu
   * @param pane Menu pane information
   * @param requestedX Requested clientX co-ordinate
   * @param requestedY Requested clientY co-ordinate
   * @param onExecute Command execution callback
   * 
   */
  request(pane: MenuPaneInfo, requestedX: number, requestedY: number, onExecute: (id: string) => void): void;

  /**
   * Renders the context menu to be shon with the specified co-ordinates
   * @param clientX Requested clientX co-ordinate
   * @param clientY Requested clientY co-ordinate
   */
  render(clientX: number, clientY: number): void;

  /**
   * Displays the rendered context menu
   */
  display(): void;

  /**
   * Hides the context menu
   */
  hide(): void;

  /**
   * Selects the item with the specified index.
   * @param selectedIndex Item to select
   */
  selectItem(selectedIndex: number);

  /**
   * Subscribe to store changes
   * @param run Callback to process value changes
   * @param invalidator Callback to process cleanup
   */
  subscribe(
    run: (value: ContextMenuInfo) => void,
    invalidator?: (value?: ContextMenuInfo) => void
  ): () => void;
}

/**
 * Represents the information in the store
 */
export interface ContextMenuInfo {
  pane?: MenuPaneInfo;
  requestedX?: number;
  requestedY?: number;
  state?: "requested" | "rendered" | "display";
  onExecute?: (id: string) => void;
}

/**
 * Creates a store that handles the context menu.
 */
function createStore(): ContextMenuStore {
  const { subscribe, update } = writable({} as ContextMenuInfo);

  return {
    request(pane: MenuPaneInfo, requestedX: number, requestedY: number, onExecute: (id: string) => void): void {
      update(_ => ({
        pane,
        rendered: true,
        requestedX,
        requestedY,
        state: "requested",
        onExecute
      }));
      rendererProcessStore.dispatch(menuCloseAllAction());
    },
    render(clientX: number, clientY: number) {
      update(value => ({
        ...value,
        pane: { ...value.pane, leftPos: clientX, topPos: clientY },
        state: "rendered"
      }));
    },
    display(): void {
      update(value => ({ ...value, state: "display" }));
    },
    hide(): void {
      update(_ => ({}));
    },
    selectItem(selectedIndex: number) {
      update(value => ({
        ...value,
        pane: {
          ...value.pane,
          selectedIndex
        }
      }));
    },
    subscribe
  };
}

/**
 * The singleton store instance
 */
export const contextMenuStore = createStore();
