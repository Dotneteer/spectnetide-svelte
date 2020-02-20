<script>
  // ==========================================================================
  // Represents the title bar of the Output frame

  import { createEventDispatcher } from "svelte";
  import { rendererProcessStore } from "../../rendererProcessStore";
  import { outputScrollLockAction } from "../../../shared/state/redux-main-canvas-state";

  import OutputTabBar from "./OutputTabBar.svelte";
  import SvgIcon from "../../controls/SvgIcon.svelte";
  import ToolbarIconButton from "../../controls/ToolbarIconButton.svelte";

  // ==========================================================================
  // Component parameters
  // --- Output frame chevron position
  export let chevronPosition;

  // --- Set of tabs to display
  export let tabs;

  // --- State of the active tab
  export let activeTabState;

  // --- Active tab ID
  export let activeTab;

  // ==========================================================================
  // Component logic
  const dispatch = createEventDispatcher();
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
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .title-buttons {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    height: 100%;
  }
</style>

<div class="output-title">
  <OutputTabBar {tabs} {activeTab} on:context-menu />
  <div class="title-buttons">
    {#if activeTabState && activeTabState.isScrollLockVisible}
      {#if activeTabState.scrollLock}
        <ToolbarIconButton
          iconName="lock"
          on:clicked={() => rendererProcessStore.dispatch(outputScrollLockAction(activeTab, false))} />
      {:else}
        <ToolbarIconButton
          iconName="unlock"
          on:clicked={() => rendererProcessStore.dispatch(outputScrollLockAction(activeTab, true))} />
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
