import { writable } from "svelte/store";

/**
 * Represents the state that handles the app window's size.
 */
export interface WindowSizeStore {
  /**
   * Sets the current window size
   * @param size Window size to store
   */
  setSize(size: WindowSize): void;

  /**
   * Subscribe to store changes
   * @param run Callback to process value changes
   * @param invalidator Callback to process cleanup
   */
  subscribe(
    run: (value: WindowSize) => void,
    invalidator?: (value?: WindowSize) => void
  ): () => void;
}

/**
 * Creates a store that handles the application's window size.
 */
function createStore(): WindowSizeStore {
  const { subscribe, set } = writable({ width: 0, height: 0 } as WindowSize);

  return {
    setSize: (size: WindowSize) => set(size),
    subscribe
  };
}

/**
 * Represents the current window size
 */
export interface WindowSize {
  width: number;
  height: number;
}

/**
 * The singleton store instance
 */
export const windowSizeStore = createStore();
