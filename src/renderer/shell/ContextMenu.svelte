<script>
  import { afterUpdate, onDestroy } from "svelte";
  import { createRendererProcessStateAware } from "../rendererProcessStore";
  import {
    showContextMenuAction,
    hideContextMenuAction,
    contextItemSelectAction,
    contextItemUpAction,
    contextItemDownAction,
    contextItemPointAction,
    contextMenuMountedAction
  } from "../../shared/state/redux-context-menu-state";

  import MenuPane from "./MenuPane.svelte";

  import {
    handleKeyDown,
    handleKeyUp,
    handleItemPointed,
    handleItemClicked
  } from "./ContextMenu";

  let hostElement;
  let contextMenu;

  const stateAware = createRendererProcessStateAware("contextMenu");
  stateAware.onStateChanged.on(state => {
    contextMenu = state;
  });

  const focusAware = createRendererProcessStateAware("appHasFocus");
  focusAware.onStateChanged.on(state => {
    if (!state) {
      focusAware.dispatch(hideContextMenuAction());
    }
  });

  afterUpdate(() => {
    if (hostElement) {
      hostElement.focus();
    }
  });

  onDestroy(() => {
    stateAware.onStateChanged.release();
    focusAware.onStateChanged.release();
  });
</script>

<style>
  .context-menu-container {
    outline: none;
  }
</style>

<svelte:window on:keydown={handleKeyDown} on:keyup={handleKeyUp} />
{#if contextMenu}
  <div
    tabindex="-1"
    bind:this={hostElement}
    class="context-menu-container"
    on:blur={() => stateAware.dispatch(hideContextMenuAction())}>
    <MenuPane
      depth={0}
      items={contextMenu.items}
      leftPos={contextMenu.leftPos}
      topPos={contextMenu.topPos}
      selectedIndex{contextMenu.selectedIndex} />
  </div>
{/if}
