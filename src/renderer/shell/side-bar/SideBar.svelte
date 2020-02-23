<script>
  import VirtualizedList from "../../controls/VirtualizedList.svelte";
  import { SideBarItemList} from "./SideBarItemList";

  export let initialSize = 192;

  let items = new SideBarItemList();
  let indexData;
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
    let:index={indexData}>
    <div class= "item">{indexData}: {itemData}</div>
  </VirtualizedList>
</div>
