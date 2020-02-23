<script>
  // ==========================================================================
  // Represents a virualized list. Only the items visible within the currently
  // displayed viewport are rendered.

  import { onMount, onDestroy } from "svelte";
  import { writable } from "svelte/store";
  import FloatingScrollbar from "./FloatingScrollbar.svelte";
  import { VirtualizedListComponent } from "./VirtualizedList";

  // ==========================================================================
  // Component parameters
  // --- The items within the list
  export let items;

  // --- The heights of the child items
  export let itemHeight;

  let hostElement;
  let contentElement;

  let listComponent;
  let totalListHeight;
  let displayedItems = [];

  let virtualListStore = writable({
    topPosition: 0,
    displayedItems: []
  });

  onMount(() => {
    listComponent = new VirtualizedListComponent(
      hostElement,
      contentElement,
      virtualListStore
    );
    listComponent.childHeight = Number(itemHeight);
  });

  onDestroy(() => {
    listComponent.displayedItemsChanged.release();
  });

  $: {
    if (listComponent && items) {
      listComponent.itemsSource = items;
      totalListHeight = listComponent.totalListHeight;
    }
  }

  $: displayedItems = $virtualListStore.displayedItems;

  function handleDisplayedItemsChanged() {
    displayedItems = listComponent.displayedItems;
  }

  // ==========================================================================
  // Renaming logic

  let renamePanelType;
  // [style.top.px]="renameBoxTop"
  // [style.left.px]="renameBoxLeft"
  // [style.width.px]="renameBoxWidth"
  // [style.height.px]="renameBoxHeight">

  let isInRenaming = false;
  let isRenameValueInvalid = false;

  function abortRenaming() {}

  function validateRenaming() {}
</script>

<style>
  .virtualized-list {
    display: block;
    overflow: hidden;
    overflow-y: scroll;
    position: relative !important;
    -webkit-overflow-scrolling: touch;
  }

  .list-placeholder {
    visibility: hidden;
  }

  .list-content {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    color: white;
  }

  .rename-overlay {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .rename-overlay.renaming {
    display: flex;
    background-color: black;
    opacity: 0.5;
  }

  .rename-panel {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
  }

  .rename-panel.renaming {
    display: flex;
  }

  .rename-box {
    outline: none;
    font-size: 0.9em;
    width: 100%;
    height: 100%;
    font-size: 1em;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }
</style>

<div
  bind:this={hostElement}
  class="virtualized-list"
  on:scroll={() => listComponent.refreshView()}>
  <div class="list-placeholder" style="height:{totalListHeight}px" />
  <div
    bind:this={contentElement}
    class="list-content"
    style="transform: translateY({$virtualListStore.topPosition}px)">
    {#each $virtualListStore.displayedItems as item, index (item.itemIndex)}
      <div on:click={() => console.log(item.itemIndex)}>
        <slot {item} index={item.itemIndex} />
      </div>
    {/each}
  </div>
  <FloatingScrollbar orientation="vertical" scrollSize={totalListHeight} />

  <div class="rename-overlay" class:renaming={isInRenaming} />
  <div
    class="rename-panel"
    class:renaming={isInRenaming}
    style={renamePanelType}>
    <input
      class:invalid={isRenameValueInvalid}
      class="rename-box"
      type="text"
      on:blur={abortRenaming}
      on:keyup={validateRenaming} />
  </div>
</div>
