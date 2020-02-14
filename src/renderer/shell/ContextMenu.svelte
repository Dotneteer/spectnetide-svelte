<script>
  import { onMount, onDestroy } from "svelte";
  import { createRendererProcessStateAware } from "../rendererProcessStore";
  import {
    showContextMenuAction,
    hideContextMenuAction,
    contextItemSelectAction,
    contextItemUpAction,
    contextItemDownAction,
    contextItemPointAction
  } from "../../shared/state/redux-context-menu-state";

  import MenuPane from "./MenuPane.svelte";

  let hostElement;
  let contextMenu;

  const stateAware = createRendererProcessStateAware("contextMenu");
  stateAware.onStateChanged.on(state => {
    contextMenu = state;
    console.log(state);
  });

  const focusAware = createRendererProcessStateAware("appHasFocus");
  focusAware.onStateChanged.on(state => {
    console.log("Focus changed.");
    if (!state) {
      focusAware.dispatch(hideContextMenuAction());
    }
  });

  onMount(() => {
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

{#if contextMenu}
  <div
    bind:this={hostElement}
    tabindex="0"
    class="context-menu-container"
    on:blur={() => {
      console.log('onblur');
      stateAware.dispatch(hideContextMenuAction());
    }}>
    <MenuPane
      depth={0}
      items={contextMenu.items}
      leftPos={contextMenu.leftPos}
      topPos={contextMenu.topPos}
      selectedIndex{contextMenu.selectedIndex} />
  </div>
{/if}
