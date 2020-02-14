<script>
  // ==========================================================================
  // Represents the output window frame

  import OutputTitlebar from "./OutputTitlebar.svelte";

  // ==========================================================================
  // Component parameters
  // --- Initial size of the output frame
  export let initialSize;

  // --- The poisition of the output frame within the main canvas:
  // --- "left" | "bottom" | "right"
  export let position;

  // --- Output frame chevron position
  export let chevronPosition;

  // --- The name of the active tab
  export let activeTab;

  // --- Current output frame dimensions
  export let outputWidth;
  export let outputHeight;
</script>

<style>
  .output-frame {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: var(--shell-canvas-background-color);
  }

  .left-docked {
    border-right: 1px solid var(--panel-separator-border);
  }

  .right-docked {
    border-left: 1px solid var(--panel-separator-border);
  }

  .bottom-docked {
    border-top: 1px solid var(--panel-separator-border);
  }
</style>

<div
  class="output-frame"
  class:left-docked={position === 'left'}
  class:right-docked={position === 'right'}
  class:bottom-docked={position === 'bottom'}
  data-initial-size={initialSize}
  bind:clientWidth={outputWidth}
  bind:clientHeight={outputHeight}>
  <OutputTitlebar {position} {chevronPosition} on:change-position on:hide />
  <h1>{activeTab}</h1>
</div>
