<script>
  // ==========================================================================
  // Represents the output window frame
  import { createEventDispatcher } from "svelte";
  import { contextMenuStore} from "../../stores/context-menu-store";
  import { outputPaneContextMenu } from "../../../shared/output-frame/output-frame-commands";

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

  // --- Information about tabs
  export let tabs;
  export let activeTab;
  export let activeTabState;

  // --- Current output frame dimensions
  export let outputWidth;
  export let outputHeight;

  // ==========================================================================
  // Component logic
  let hostElement;

  const dispatch = createEventDispatcher();

  function showContextMenu(ev) {
    const menuInfo = {
      items: outputPaneContextMenu.submenu,
      leftPos: ev.detail.clientX,
      topPos: ev.detail.clientY,
      selectedIndex: -1
    };
    contextMenuStore.request(menuInfo, ev.detail.clientX, ev.detail.clientY, id => {
      dispatch("contex-menu-execute", id);
    });

  }
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
  bind:this={hostElement}
  class="output-frame"
  class:left-docked={position === 'left'}
  class:right-docked={position === 'right'}
  class:bottom-docked={position === 'bottom'}
  data-initial-size={initialSize}
  bind:clientWidth={outputWidth}
  bind:clientHeight={outputHeight}>
  <OutputTitlebar
    {position}
    {chevronPosition}
    {tabs}
    {activeTab}
    {activeTabState}
    on:change-position
    on:hide
    on:context-menu={showContextMenu} />
  <h1>{activeTab}</h1>
</div>
