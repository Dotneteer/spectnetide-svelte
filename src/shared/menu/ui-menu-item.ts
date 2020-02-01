import { BrowserWindow } from "electron";
import { ILiteEvent, LiteEvent } from "./utils/LiteEvent";

/**
 * Represents the state of a menu item
 */
export interface MenuItemState {
  /**
   * Is the item enabled?
   */
  enabled: boolean;

  /**
   * Is the item visible?
   */
  visible: boolean;

  /**
   * Is the item checked?
   */
  checked: boolean;

  /**
   * The menu item's label
   */
  label: string;
}

/**
 * Defines the data contents of a menu item
 */
export interface MenuItemDescriptor extends MenuItemState {
  /**
   * The unique identifier of this menu item
   */
  id: string;

  /**
   * Type of the menu item
   */
  type?: MenuItemType;

  /**
   * Preset role of the menu item
   */
  role?: MenuRole;

  /**
   * The access key of the menu item
   */
  accessKey: string | null;

  /**
   * The accelerator key combination
   */
  accelerator: string;

  /**
   * Items of the submenu, provided this item is a submenu type.
   */
  submenu?: MenuItemDescriptor[];
}

/**
 * This class represents the base class for a menu command
 */
export abstract class MenuItemBase implements MenuItemDescriptor {
  // --- Automatic sequential ID
  private static _nextId = 1;

  // --- Raise when the status of the item is updated.
  private _statusUpdated = new LiteEvent<MenuItemBase>();

  /**
   * Instantiates a new item
   * @param id Unique item identifier
   * @param label Initial label
   * @param role Optional predefined role
   */
  constructor(id?: string, label?: string, role?: MenuRole) {
    this.id = id || `menu-item-${MenuItemBase._nextId++}`;
    this.label = label || "";
    const m = this.label.match(/&([^&])/);
    this.accessKey = m ? m[1] : null;

    this.type = "normal";
    this.role = role;

    this.enabled = this.visible = true;
    this.checked = false;
  }

  /**
   * The unique identifier of this menu item
   */
  id: string;

  /**
   * Type of the menu item
   */
  type?: MenuItemType;

  /**
   * Is the item enabled?
   */
  enabled: boolean;

  /**
   * Is the item visible?
   */
  visible: boolean;

  /**
   * Is the item checked?
   */
  checked: boolean;

  /**
   * The menu item's label
   */
  label: string;

  /**
   * Preset role of the menu item
   */
  role?: MenuRole;

  /**
   * The access key of the menu item
   */
  accessKey: string | null;

  /**
   * The accelerator key combination
   */
  accelerator: string;

  /**
   * Items of the submenu, provided this item is a submenu type.
   */
  submenu?: MenuItemDescriptor[];

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
  get statusUpdated(): ILiteEvent<MenuItemBase> {
    return this._statusUpdated;
  }

  /**
   * Instructs the menu item to execute its associated action
   * @param window Host browser window
   * Override this method to specify execution behavior
   */
  onExecute(window: BrowserWindow): void {
    console.log(`Command '${this.id}' executed.`);
  }

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
  enable(enabled: boolean): MenuItemBase {
    this.enabled = enabled;
    return this;
  }

  /**
   * Sets the "checked" flag of the item
   * @param enabled "checked" flag value
   */
  check(checked: boolean): MenuItemBase {
    this.checked = checked;
    return this;
  }

  /**
   * Sets the accelerator key of the item
   * @param accelerator Accelerator key
   */
  withAccelerator(accelerator: string): MenuItemBase {
    this.accelerator = accelerator;
    return this;
  }

  /**
   * Appends a new subitem to the existing ones.
   * @param item Item to append.
   */
  append(item: MenuItemBase): MenuItemBase {
    this.type = "submenu";
    if (item) {
      if (!this.submenu) {
        this.submenu = [item]
      } else {
        this.submenu.push(item);
      }
    }
    return this;
  }
}

/**
 * Represents a normal menu item
 */
export class StandardMenuItem extends MenuItemBase {
  constructor(id: string, label: string) {
    super(id, label);
  }
}

/**
 * Represents a menu separator item
 */
export class MenuSeparator extends MenuItemBase {
  constructor() {
    super();
    this.type = "separator";
  }
}

/**
 * Represents a checkbox item
 */
export class CheckboxMenuItem extends MenuItemBase {
  /**
   * Instantiates a new item
   * @param id Unique item identifier
   * @param label Initial label
   * @param role Optional predefined role
   */
  constructor(id?: string, label?: string) {
    super(id, label);
    this.type = "checkbox";
  }
}

/**
 * Defines a menu item with predefined Electron Shell role
 */
export class ElectronShellMenuItem extends MenuItemBase {
  constructor(
    role: MenuRole,
    label?: string,
    accelerator?: string,
    id?: string
  ) {
    super(id || role, label, role);
    if (accelerator) this.withAccelerator(accelerator);
  }
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

export type MenuItemType =
  | "normal"
  | "separator"
  | "submenu"
  | "checkbox"
  | "radio";
