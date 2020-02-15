<script>
  import { createEventDispatcher } from "svelte";

  import OutputTabBar from "./OutputTabBar.svelte";
  import SvgIcon from "../controls/SvgIcon.svelte";
  import ToolbarIconButton from "../controls/ToolbarIconButton.svelte";

  // ==========================================================================
  // Component parameters
  // --- Output frame chevron position
  export let chevronPosition;

  // --- State of the active tab
  export let activeTabState;

  // ==========================================================================
  // Component logic
  const dispatch = createEventDispatcher();

  let rightMouseDown;

  function handleMouseDown(ev) {
    rightMouseDown = ev.button === 2;
  }

  function handleMouseUp(ev) {
    if (rightMouseDown) {
      dispatch("context-menu", ev);
    }
    rightMouseDown = false;
  }
</script>

<style>
  .output-title {
    display: flex;
    flex-shrink: 0;
    height: 35px;
    width: 100%;
    color: var(--titlebar-text-color);
    box-sizing: border-box;
    align-items: center;
    justify-content: start;
    font-size: 0.9em;
  }

  .title-buttons {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    height: 100%;
  }
</style>

<div
  class="output-title"
  on:mousedown={handleMouseDown}
  on:mouseup={handleMouseUp}>
  <OutputTabBar />
  <div class="title-buttons">
    {#if activeTabState && activeTabState.isScrollLockVisible}
      {#if activeTabState.scrollLock}
        <ToolbarIconButton iconName="lock" />
      {:else}
        <ToolbarIconButton iconName="unlock" />
      {/if}
    {/if}
    {#if activeTabState && activeTabState.isClearVisible}
      <ToolbarIconButton iconName="clear-all" />
    {/if}
    <ToolbarIconButton
      iconName={'chevron-' + chevronPosition}
      on:clicked={() => dispatch('change-position')} />
    <ToolbarIconButton iconName="close" on:clicked={() => dispatch('hide')} />
  </div>
</div>
