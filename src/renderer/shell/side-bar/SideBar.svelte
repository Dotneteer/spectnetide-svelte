<script>
  import VirtualizedList from "../../controls/VirtualizedList.svelte";
  import { SideBarItemList} from "./SideBarItemList";

  export let initialSize = 192;

  let items = new SideBarItemList();
  let indexData;

  function addItems() {
    const newItems = new SideBarItemList(items.items);
    newItems.addItems(10);
    items = newItems;
  }
</script>

<style>
  .sidebar {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    height: 100%;
    width: 192px;
    background-color: var(--sidebar-background-color);
    position: relative;
  }

  .item {
    height: 30px;
  }
</style>

<div class="sidebar" data-initial-size={initialSize}>
  <VirtualizedList
    {items}
    itemHeight="30"
    let:item={itemData}
    let:index={indexData}
    on:item-selected={() => addItems()}>
    <div class= "item">{indexData}: {itemData.caption}</div>
  </VirtualizedList>
</div>
