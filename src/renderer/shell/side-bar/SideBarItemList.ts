import { IListable, IListItem } from "@/renderer/controls/VirtualizedList";
import { LiteEvent } from "@/shared/menu/utils/LiteEvent";

export interface SideBarItem {
  index: number;
  caption: string;
}

export class SideBarItemList implements IListable<SideBarItem> {
  private _items: SideBarItem[];

  /**
   * Creates a list of demo items
   */
  constructor() {
    this._items = [];
    for (let i = 0; i < 100; i++) {
      this._items[i] = {
          index: i,
          caption: `Item #${i}`
      }
    }
  }

  /**
   * Retrieves the items slice of the specified range.
   */
  getListItemRange(
    start: number,
    end: number,
    topHidden?: number
  ): IListItem<SideBarItem>[] {
    const offset = topHidden || 0;
    return this._items
      .slice(start + offset, end + offset + 1)
      .map((item, index) => {
        return {
          itemIndex: index + start + offset,
          data: item
        };
      });  
  }

  /**
   * Retrieves the items sizes for the specified range.
   */
  getListItemSizes(start: number, end: number): number[] {
    const result: number[] = [];
    for (let i = start; i <= end; i++) {
      result[i - start] = 30;
    }
    return result;
  }

  /**
   * This event is raised when the items (or their count) has changed.
   */
  readonly itemsChanged = new LiteEvent<void>();

  /**
   * Gets the number of items in the list
   */
  get itemsCount(): number {
      return this._items.length;
  }
}
