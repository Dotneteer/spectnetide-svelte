import { BrowserWindow, MenuItemConstructorOptions } from "electron";
import { ILiteEvent, LiteEvent } from "../utils/LiteEvent";

/**
 * Represents the state of a menu item
 */
export interface MenuItemState {
  /**
   * Is the item enabled?
   */
  readonly enabled: boolean;

  /**
   * Is the item visible?
   */
  readonly visible: boolean;

  /**
   * Is the item checked?
   */
  readonly checked: boolean;

  /**
   * The menu item's label
   */
  readonly label: string;
}

/**
 * Represents an executable menu item with its UI-state information
 */
export class UiMenuItem implements MenuItemState {
  private _statusUpdated = new LiteEvent<UiMenuItem>();

  // --- Automatic sequential ID
  private static _nextId = 1;

  /**
   * Instantiates a new item
   * @param id Unique item identifier
   * @param label Initial label
   * @param role Optional predefined role
   */
  constructor(
    public readonly id?: string,
    label?: string,
    public readonly role?: MenuRole
  ) {
    if (!id) id = `menu-item-${UiMenuItem._nextId++}`;
    this.label = label || "";
    const m = this.label.match(/&([^&])/);
    this.accessKey = m ? m[1] : null;
  }

  /**
   * Optional menu item in the shell
   */
  shellMenuItem: MenuItemConstructorOptions | undefined;

  /**
   * Indicates if this item is displayed as a separator.
   */
  separator: boolean = false;

  /**
   * The menu item's label
   */
  label: string;

  /**
   * Is the item enabled?
   */
  enabled: boolean = true;

  /**
   * Is the item visible?
   */
  visible: boolean;

  /**
   * Is the item checked?
   */
  checked: boolean;

  /**
   * The access key of the menu item
   */
  accessKey: string | null;

  /**
   * The accelerator key combination
   */
  accelerator: string;

  /**
   * Instructs the menu item to execute its associated action
   * @param window Host browser window
   * Override this method to specify execution behavior
   */
  onExecute(window: BrowserWindow): void {}

  /**
   * Instructs the menu item to update its status
   * @param window Host browser window
   * Override this method to specify update behavior
   */
  onQueryStatus(window: BrowserWindow): void {}

  /**
   * Sets the "enabled" flag of the item
   * @param enabled "enabled" flag value
   */
  enable(enabled: boolean): UiMenuItem {
    this.enabled = enabled;
    return this;
  }

  /**
   * Sets the accelerator key of the item
   * @param accelerator Accelerator key
   */
  withAccelerator(accelerator: string): UiMenuItem {
    this.accelerator = accelerator;
    return this;
  }

  /**
   * Appends a new subitem to the existing ones.
   * @param item Item to append.
   */
  append(item: UiMenuItem): UiMenuItem {
    if (item) this.items.push(item);
    return this;
  }

  /**
   * Subitems within this menu item
   */
  readonly items: UiMenuItem[] = [];

  /**
   * Updates the status of the item in the specified browser window
   * @param window Browser window
   */
  updateStatus(window: BrowserWindow): void {
    const oldLabel = this.label;
    const oldEnabled = this.enabled;
    const oldVisible = this.visible;
    const oldChecked = this.checked;

    this.onQueryStatus(window);

    if (
      oldLabel !== this.label ||
      oldEnabled !== this.enabled ||
      oldVisible !== this.visible ||
      oldChecked !== this.checked
    ) {
      this._statusUpdated.fire(this);
    }
  }

  /**
   * Fires when the status of the command has been updated
   */
  get statusUpdated(): ILiteEvent<UiMenuItem> {
    return this._statusUpdated;
  }
}

/**
 * Defines a separator menu item.
 */
export class SeparatorMenuItem extends UiMenuItem {
  constructor() {
    super();
    this.separator = true;
  }
}

/**
 * Defines a menu item with predefined Electron Shell role
 */
export class ElectronShellMenuItem extends UiMenuItem {
  constructor(role: MenuRole, label?: string, accelerator?: string) {
    super(undefined, label, role);
    if (accelerator) this.withAccelerator(accelerator);
  }
}

/**
 * Flattens the specified items of a menu panel
 * @param items Menu panel items to flatten
 */
export function flattenMenuPanel(items: UiMenuItem[]): UiMenuItem[] {
  const result: UiMenuItem[] = [];
  items.forEach(i => {
    if (i.items.length > 0) {
      result.push(...i.items);
    } else {
      result.push(i);
    }
  });
  return result;
}

/**
 * Available menu roles
 */
export type MenuRole =
  | "undo"
  | "redo"
  | "cut"
  | "copy"
  | "paste"
  | "pasteAndMatchStyle"
  | "delete"
  | "selectAll"
  | "reload"
  | "forceReload"
  | "toggleDevTools"
  | "resetZoom"
  | "zoomIn"
  | "zoomOut"
  | "togglefullscreen"
  | "window"
  | "minimize"
  | "close"
  | "help"
  | "about"
  | "services"
  | "hide"
  | "hideOthers"
  | "unhide"
  | "quit"
  | "startSpeaking"
  | "stopSpeaking"
  | "close"
  | "minimize"
  | "zoom"
  | "front"
  | "appMenu"
  | "fileMenu"
  | "editMenu"
  | "viewMenu"
  | "recentDocuments"
  | "toggleTabBar"
  | "selectNextTab"
  | "selectPreviousTab"
  | "mergeAllWindows"
  | "clearRecentDocuments"
  | "moveTabToNewWindow"
  | "windowMenu";
