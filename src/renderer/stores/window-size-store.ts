import { writable } from "svelte/store";

/**
 * Represents the state that handles the app window's size.
 */
export interface WindowSizeStore {
  reset: () => void;
  setSize: (size: WindowSize) => void;
  subscribe: (run: (value: WindowSize) => void, invalidator?: (value?: WindowSize) => void) => () => void;
}

/**
 * Creates a store that handles the application's window size.
 */
function createStore(): WindowSizeStore {
  const { subscribe, set } = writable({ width: 0, height: 0} as WindowSize);

  return {
    reset: () => set({ width: 0, height: 0}),
    setSize: (size: WindowSize) => set(size),
    subscribe 
  }
}

/**
 * Represents the current window size
 */
export interface WindowSize {
  width: number;
  height: number;
}

/**
 * The singleton store index
 */
export const windowSizeStore = createStore();