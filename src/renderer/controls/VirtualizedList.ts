import { writable, Writable } from "svelte/store";
import { ILiteEvent, LiteEvent } from "@/shared/menu/utils/LiteEvent";

/**
 * Represents the state of the virtual list
 */
export interface VirtualListState<TItem = any> {
  /**
   * The top scroll position
   */
  topPosition: number;

  /**
   * The current list of items to display
   */
  displayedItems: IListItem<TItem>[];
}

export class VirtualizedListComponent<TItem = any>
  implements ISelectHost<TItem> {
  private _itemsSource: IListable<TItem> | undefined;

  private _itemHeights: IListItemPosition[] = [];
  private _previousStart = -1;
  private _previousEnd = -1;
  private _lastRenderedItems: IListItem<TItem>[];
  private _removeCalcItems = false;
  private _selectedItem: IListItem<TItem> | undefined;
  private _rootVisible: boolean;
  private _itemRenaming: IListItem<TItem> | undefined;

  // ========================================================================
  // Lifecycle methods

  /**
   * Instantiates a new list component.
   * @param element The element that hosts the list.
   * @param contentElement The element that holds the list items.
   */
  constructor(
    protected element: HTMLElement,
    protected contentElement: HTMLElement,
    protected store: Writable<VirtualListState<TItem>>
  ) {
    this.rootVisible = true;
  }

  /**
   * Indicates if the root node (index with 0) of the list/tree should be visible.
   */
  get rootVisible(): boolean {
    return this._rootVisible;
  }
  set rootVisible(value: boolean) {
    this._rootVisible = value;
    this.topHidden = value ? 0 : 1;
  }

  /**
   * The list of source items
   */
  get itemsSource(): IListable<TItem> | undefined {
    return this._itemsSource;
  }
  set itemsSource(value: IListable<TItem> | undefined) {
    if (this._itemsSource !== value) {
      this._itemsSource = value;
      this.refreshItemsSource();
    }
  }

  /**
   * Number of top items that are not displayed.
   */
  topHidden = 0;

  /**
   * The child item height to calculate item heights. If not specified, 8 pixels
   * is used for calculation.
   */
  childHeight = 8;

  /**
   * This event is raised when the item is selected. The argument of the
   * event is the selected item.
   */
  itemSelected = new LiteEvent<IListItem<TItem> | undefined>();

  /**
   * This event is raised when the selection changes in the list. The argument of the
   * event is the newly selected item.
   */
  selectionChanged = new LiteEvent<IListItem<TItem> | undefined>();

  /**
   * Indicates if renaming is allowed.
   */
  allowRenaming = true;

  /**
   * The function the calculates item location
   */
  itemLocationFunc: ItemLocationGetterFunction<TItem> | undefined;

  /**
   * The function that gets the name of the item. If not defined, renaming is not
   * allowed.
   */
  itemNameGetterFunc: ItemNameGetterFunction<TItem> | undefined;

  /**
   * Validates the item while the user types it into the rename box
   */
  itemValidatorFunc: ItemValidatorFunction<TItem> | undefined;

  /**
   * The function that can carry out renaming the item. If not defined, renaming is not
   * allowed.
   */
  itemRenameFunc: ItemRenameFunction<TItem> | undefined;

  /**
   * This event is raised when the renaming operation fails. The event argument is
   * the error message.
   */
  itemRenamingFailed = new LiteEvent<string>();

  // ========================================================================
  // Bindings

  /**
   * Refreshes the list whenever any scroll event occurs
   */
  //@HostListener("scroll")
  onScrollEvent() {
    this._renderItems();
  }

  /**
   * Catch the resize events of the main window so that the new list
   * height can be applied
   */
  //@HostListener("window:resize", ["$event"])
  onResize() {
    this._renderItems();
  }

  /**
   * Gets the total height of the list
   */
  get totalListHeight(): number {
    let height = 0;
    for (const item of this._itemHeights) {
      height += item.height;
    }
    return height;
  }

  /**
   * Represents the top position of the contents panel
   */
  topPadding: number;

  /**
   * The list of displayed items.
   */
  displayedItems: Array<IListItem<TItem>>;

  renameBox: HTMLInputElement;

  /**
   * Indicates if the list view is in renaming mode.
   */
  isInRenaming: boolean;

  /**
   * The current value in the rename box.
   */
  renameValue: string;

  /**
   * Indicates if the current rename value is invalid.
   */
  isRenameValueInvalid: boolean;

  /**
   * The top position of the rename box in pixels.
   */
  renameBoxTop: number;

  /**
   * The left position of the rename box in pixels.
   */
  renameBoxLeft: number;

  /**
   * The width of the rname box in pixels.
   */
  renameBoxWidth: number;

  /**
   * The height of the rename box in pixels.
   */
  renameBoxHeight: number;

  /**
   * Validates the rename value while the user types its name.
   */
  async validateRenaming(): Promise<void> {
    if (this.itemValidatorFunc) {
      this.isRenameValueInvalid = !(await this.itemValidatorFunc(
        this._itemRenaming,
        this.renameValue
      ));
    }
  }

  /**
   * Completes the renaming operation. If the operation fails, raises an {@link itemRenamingFailed}
   * event.
   */
  async completeRenaming(): Promise<void> {
    let result: string | undefined;
    if (this._itemRenaming) {
      result = await this.itemRenameFunc(this._itemRenaming, this.renameValue);
    }
    this.isInRenaming = false;
    this._itemRenaming = undefined;
    if (result) {
      this.itemRenamingFailed.fire(result);
    }
  }

  // TODO: Find other way to initiate renaming
  /**
   * Triggers the rename operation.
   * @param ev Mouse event triggering the rename operation
   * @param item Item to rename
   */
  onMouseDown(ev: MouseEvent, item: IListItem<TItem>): void {
    if (ev.button === 2) {
      this.startRenaming(item);
    }
  }

  // ========================================================================
  // Public operations

  /**
   * Forces refreshing the items source. Use this method when the contents
   * (the number of items) in the items source has changed.
   */
  refreshItemsSource(): void {
    this.fixItemHeights();
    this.refreshView();
  }

  /**
   * Refreshes the current view of the list. Use this method if the source items
   * behind the current view might have changed.
   */
  refreshView(): void {
    requestAnimationFrame(() => {
      this._renderItems();
    });
  }

  /**
   * Select an item in the list. Each invocation raises the {@link itemSelected} event.
   * If the selected item is different from the current selection, the method raises the
   * {@link selectionChanged} event, too.
   * @param item Selected item
   */
  selectItem(item: IListItem<TItem> | undefined): void {
    this.itemSelected.fire(item);
    if (this._selectedItem !== item) {
      this._selectedItem = item;
      this.selectionChanged.fire(item);
    }
  }

  /**
   * Gets the index of the selected item. Retrieves undefined, if there
   * is no selected item.
   */
  get selectedIndex(): number | undefined {
    return this._selectedItem ? this._selectedItem.itemIndex : undefined;
  }

  /**
   * Gets the payload of the selected item. Retrieves undefined, if there
   * is no selected item.
   */
  get selectedItem(): TItem | undefined {
    return this._selectedItem ? this._selectedItem.data : undefined;
  }

  /**
   * Gets the top position of the specified item.
   * @param index Item index.
   * @returns Item top position and height, if found; otherwise, undefined.
   */
  getItemLocation(index: number): IListItemPosition | undefined {
    return index < 0 || index >= this._itemsCount
      ? undefined
      : this._itemHeights[index];
  }

  /**
   * Starts a renaming operation, provided renaming is allowed and the component's
   * {@link itemRenameFunc} callback function has been set.
   * @param item Item to rename.
   */
  startRenaming(item: IListItem<TItem>): void {
    // --- Check for renaming functions
    if (!this.allowRenaming || !this.itemRenameFunc) {
      return;
    }

    // --- Prepare (and check) the location of the rename box
    const itemLoc = this.getItemLocation(item.itemIndex);
    if (!itemLoc) {
      return;
    }

    // --- Set up the location of the input box
    this.renameBoxTop = itemLoc.top;
    if (this.itemLocationFunc) {
      const location = this.itemLocationFunc(item);
      this.renameBoxLeft = location.left;
      this.renameBoxWidth = location.width
        ? location.width
        : this.element.offsetWidth - location.left;
      if (location.top) {
        this.renameBoxTop += location.top;
      }
      this.renameBoxHeight = location.height ? location.height : itemLoc.height;
    } else {
      this.renameBoxLeft = 0;
      this.renameBoxWidth = this.element.offsetWidth;
    }

    // --- Set up the initial value
    this.renameValue = this.itemNameGetterFunc
      ? this.itemNameGetterFunc(item) || ""
      : (item.data as any).toString
      ? (item.data as any).toString()
      : "";
    this._itemRenaming = item;

    // --- Now, display the rename box
    this.isInRenaming = true;
    setTimeout(() => {
      if (this.renameBox) {
        this.renameBox.focus();
        this.renameBox.select();
      }
    }, 10);
  }

  /**
   * Aborts the current rename operation without changing the item.
   */
  abortRenaming(): void {
    this.isInRenaming = false;
    this._itemRenaming = undefined;
  }

  // ========================================================================
  // Helpers

  /**
   * The counf of list items to display
   */
  private get _itemsCount(): number {
    return Math.max(
      this._itemsSource ? this.itemsSource.itemsCount - this.topHidden : 0,
      0
    );
  }

  /**
   * Fixes the previous array of item heights
   */
  private fixItemHeights(): void {
    const itemCount = this._itemsCount;
    if (itemCount > this._itemHeights.length) {
      // --- New items added, add default item heights
      const lastCount = this._itemHeights.length;
      let lastTop = 0;
      if (this._itemHeights.length > 0) {
        const lastItem = this._itemHeights[this._itemHeights.length - 1];
        lastTop = lastItem.top + lastItem.height;
      }
      while (itemCount > this._itemHeights.length) {
        this._itemHeights.push({
          top: lastTop,
          height: this.childHeight
        });
        lastTop += this.childHeight;
      }
    } else if (itemCount < this._itemHeights.length) {
      // --- Items have been removed
      this._itemHeights.length = itemCount;
    }
  }

  /**
   * Gets the index of the first item that intersects the specified position.
   * @param position Position to get the item index for
   */
  private _getItemIndexForPosition(position: number): number {
    let minIndex = 0;
    let maxIndex = this._itemHeights.length;
    while (minIndex < maxIndex) {
      const searchIndex = Math.floor((minIndex + maxIndex) / 2);
      const item = this._itemHeights[searchIndex];
      if (position >= item.top && position < item.top + item.height) {
        return searchIndex;
      } else if (position < item.top) {
        maxIndex = searchIndex - 1;
      } else {
        minIndex = searchIndex + 1;
      }
    }
    return minIndex;
  }

  /**
   * This method executes the full rendering logic for the virtualized list.
   */
  private _renderItems(): void {
    // --- Calculate the range of items to be rendered.
    this._calculateItems();

    if (this._removeCalcItems) {
      // --- Request the next animation frame so that rendered item
      // --- heights can be calculated, or former calculation items removed.
      requestAnimationFrame(() => this._renderItems());
    }
  }

  /**
   * Calculates the items to display and raises the appropriate events
   * to display them.
   */
  private _calculateItems(): void {
    // --- Calculate the item range to display
    const itemCount = this._itemsCount;
    if (itemCount === 0) {
      return;
    }
    const scrollTop = this.element.scrollTop;
    const start = this._getItemIndexForPosition(scrollTop);
    let end =
      this._getItemIndexForPosition(
        scrollTop + this.contentElement.offsetHeight
      ) + 1;
    end = Math.min(end, itemCount);

    // --- Initialize items to render
    let needsRendering = false;
    let items: Array<IListItem<TItem>> = [];

    // --- Check if the specified range has changed
    if (this._previousStart !== start || this._previousEnd !== end) {
      // --- Either the range changed or the items in the previous range
      needsRendering = true;
      items = this._lastRenderedItems = this._itemsSource
        ? this._itemsSource.getListItemRange(start, end, this.topHidden)
        : [];
      this.topPadding = this._itemHeights[start].top;
      this._previousStart = start;
      this._previousEnd = end;
    }

    // --- Add extra items for size calculation
    if (this._removeCalcItems) {
      // --- We completed all calculations, so let's remove the last set
      // --- of calculation items
      items = this._lastRenderedItems;
      needsRendering = true;
      this._removeCalcItems = false;
    } else {
      // --- No extra items needed for calculation
      this._removeCalcItems = false;
    }

    // --- Sign a rendering update, if needed
    if (needsRendering) {
      this.displayedItems = items;
      this.store.set({
        topPosition: this.topPadding,
        displayedItems: items
      })
    }
  }
}

/**
 * This interface defines items that can be put in a virtualized list.
 * @param TItem The payload type of a list item.
 */
export interface IListItem<TItem> {
  /**
   * The index of the list item.
   */
  itemIndex: number;

  /**
   * The payload of the list item.
   */
  data: TItem;
}

/**
 * This interface defines an object that can be displayed in virtualized lists.
 * @param TItem Type of list items
 */
export interface IListable<TItem = any> {
  /**
   * Retrieves the items slice of the specified range.
   */
  getListItemRange: ItemRangeGetterFunction<TItem>;

  /**
   * Retrieves the items sizes for the specified range.
   */
  getListItemSizes?: SizeRangeGetterFunction;

  /**
   * This event is raised when the items (or their count) has changed.
   */
  readonly itemsChanged: ILiteEvent<void>;

  /**
   * Gets the number of items in the list
   */
  readonly itemsCount: number;
}

/**
 * This type defines a function the obtains a range of list items.
 */
export type ItemRangeGetterFunction<TItem> = (
  start: number,
  end: number,
  topHidden?: number
) => Array<IListItem<TItem>>;

/**
 * This type defines a function that obtain list item size range.
 */
export type SizeRangeGetterFunction = (
  start: number,
  end: number,
  topHidden?: number
) => number[];

/**
 * This interface defines the behavior of a view that contains seleactable elements.
 * @param TItem The type of item that can be selected.
 */
export interface ISelectHost<TItem> {
  /**
   * Select an item in the list
   * @param item Selected item
   */
  selectItem(item: IListItem<TItem> | undefined): void;

  /**
   * Gets the index of the selected item. Retrieves undefined, if there
   * is no selected item.
   */
  readonly selectedIndex: number | undefined;

  /**
   * Number of top items that are not displayed.
   */
  readonly topHidden: number;
}

/**
 * The function that retrieves the location of a rename item
 */
export type ItemLocationGetterFunction<TItem> = (
  item: IListItem<TItem>
) => { left: number; top?: number; width?: number; height?: number };

/**
 * The function that gets the name of the item
 */
export type ItemNameGetterFunction<TItem> = (
  item: IListItem<TItem>
) => string | undefined;

/**
 * The function that validates the item asynchronously as it is typed into the box.
 */
export type ItemValidatorFunction<TItem> = (
  item: IListItem<TItem>,
  value: string
) => Promise<boolean>;

/**
 * The function that can rename the real contents of the item aynschronously. It returns undefined
 * if rename was successful; otherwise, it retrieves an error message string. This function must
 * rename the item instance passed as the input argument, too.
 */
export type ItemRenameFunction<TItem> = (
  item: IListItem<TItem>,
  newName: string
) => Promise<string | undefined>;

/**
 * Describes the position information about an item in the virtualized list.
 */
export interface IListItemPosition {
  /**
   * The item's top position within the virtual list
   */
  top: number;

  /**
   * The item's height in pixels
   */
  height: number;
}

/**
 * Describes a range of items.
 */
export interface ItemRange {
  /**
   * Inclusive start index
   */
  start: number;

  /**
   * Inclusive end index
   */
  end: number;
}
