<script>
  // ==========================================================================
  // Represents the tab bar within the Output frame title

  import { createEventDispatcher } from "svelte";
  import { rendererProcessStore } from "../rendererProcessStore";
  import { outputShowPaneAction } from "../../shared/state/redux-main-canvas-state";

  import OutputTab from "./OutputTab.svelte";

  // ==========================================================================
  // Component parameters
  // --- List of tabtitles/ids within the tab bar
  export let tabs;

  // --- The ID of the active tab
  export let activeTab;

  // ==========================================================================
  // Component logic
  const dispatch = createEventDispatcher();

  // --- Indicates if the right mouse button is down
  let rightMouseDown;

  // --- Responds when the right mouse button is pressed down
  function handleMouseDown(ev) {
    rightMouseDown = ev.button === 2;
  }

  // --- Responds when the right mouse button is released
  function handleMouseUp(ev) {
    if (rightMouseDown) {
      dispatch("context-menu", ev);
    }
    rightMouseDown = false;
  }
</script>

<style>
  .output-tab-bar {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-shrink: 1;
    flex-wrap: wrap;
    overflow: hidden;
    height: 100%;
    padding-left: 8px;
    padding-right: 8px;
    white-space: nowrap;
  }
</style>

<div
  class="output-tab-bar"
  on:mousedown={handleMouseDown}
  on:mouseup={handleMouseUp}>
  {#if tabs}
    {#each tabs as tab}
      <OutputTab
        title={tab}
        active={activeTab}
        on:selected={ev => rendererProcessStore.dispatch(outputShowPaneAction(ev.detail))} />
    {/each}
  {/if}
</div>
