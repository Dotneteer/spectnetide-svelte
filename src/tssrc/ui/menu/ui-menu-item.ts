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

export class UiMenuItem implements MenuItemState {
  private _label: string;
  private _accessKey: string | null;

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
  get label(): string {
    return this._label;
  }
  set label(value: string) {
    this._label = value;
    const m = value.match(/&([^&])/);
    this._accessKey = m ? m[1] : null;
  }

  /**
   * The access key of the menu item
   */
  get accessKey(): string | null {
    return this._accessKey;
  }
}
