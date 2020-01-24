<script>
  import { createEventDispatcher } from "svelte";
  import MenuItem from "./MenuItem.svelte";

  import { flattenCommandGroup } from "../tslib/front/menu/menu-pane-logic";

  export let depth;
  export let items;
  export let highlight;
  export let leftPos;
  export let topPos;
  export let selectedIndex;

$: groupItems = flattenCommandGroup(items);
</script>

<style>
  .menu-pane {
    position: absolute;
    left: 100px;
    top: 50px;
    background-color: var(--menu-pane-background-color);
    box-shadow: var(--menu-pane-shadow);
    display: flex;
    flex-direction: column;
    padding: 8px 0px;
  }
</style>

<div class="menu-pane" style="z-index:{depth + 100};top:{topPos}px;left:{leftPos}px">
  {#if groupItems}
    {#each groupItems as item, index}
      <MenuItem {item} highlight={true} selected={selectedIndex === index} />
    {/each}
  {/if}
</div>
