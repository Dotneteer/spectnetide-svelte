<script>
  import { createEventDispatcher } from "svelte";
  import OutputTabBar from "./OutputTabBar.svelte";
  import SvgIcon from "../controls/SvgIcon.svelte";

  // ==========================================================================
  // Component parameters
  // --- Output frame chevron position
  export let chevronPosition;

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
  }

  .title-buttons {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    height: 100%;
    -webkit-app-region: no-drag;
  }

  .button {
    display: flex;
    width: 28px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
</style>

<div class="output-title">
  <OutputTabBar />
  <div class="title-buttons">
    <div class="button" on:click={() => dispatch("change-position")}>
      <SvgIcon
        iconName={'chevron-' + chevronPosition}
        fill="white"
        width="16"
        height="16" />
    </div>
    <div class="button" on:click={() => dispatch("hide")}>
      <SvgIcon iconName="chrome-close" fill="white" width="14" height="14" />
    </div>
  </div>
</div>
