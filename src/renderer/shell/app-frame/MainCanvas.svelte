<script>
  // ==========================================================================
  // Represents the main canvas that holds a document window frame and an
  // output window frame

  import { onDestroy } from "svelte";
  import SplitContainer from "../../controls/SplitContainer.svelte";
  import DocumentFrame from "../document-frame/DocumentFrame.svelte";
  import OutputFrame from "../output-frame/OutputFrame.svelte";
  import { createRendererProcessStateAware } from "../../rendererProcessStore";
  import {
    outputSetBottomAction,
    outputSetLeftAction,
    outputSetRightAction,
    outputMaximizeAction,
    outputHideAction,
    outputRestoreAction
  } from "../../../shared/state/redux-main-canvas-state";

  // ==========================================================================
  // Component parameters
  // --- Output window position
  // --- "left" | "bottom" | "right" | "hidden" | maximized
  export let outputPosition = "bottom";

  // ==========================================================================
  // Internal variables
  let verticalOutputSize = 240;
  let horizontalOutputSize = 240;
  let previousPosition;
  let chevronPosition = "up";
  let tabs;
  let activeTab = "output";
  let activeTabState;


  // --- Current dimensions of the output window
  let outputWidth;
  let outputHeight;

  // ==========================================================================
  // Component logic
  let stateAware = createRendererProcessStateAware("mainCanvas");
  stateAware.onStateChanged.on(state => {
    outputPosition = state.outputPosition;
    chevronPosition = state.chevronPosition;
    activeTab = state.activeTab;
    activeTabState = state.tabsStates[activeTab];
    tabs = Object.getOwnPropertyNames(state.tabsStates);
  });

  // --- Release resources
  onDestroy(() => stateAware.onStateChanged.release());

  // --- Store output window sizes whenever the splitter moves.
  function splitterMoved() {
    if (outputPosition === "bottom") {
      verticalOutputSize = outputHeight;
    } else {
      horizontalOutputSize = outputWidth;
    }
  }

  // --- Handle the output state changes between normal and
  // --- maximized.
  function handleChangeOutputPosition() {
    if (outputPosition === "maximized") {
      stateAware.dispatch(outputRestoreAction());
    } else {
      stateAware.dispatch(outputMaximizeAction());
    }
  }

  // --- Executes the context menu commands
  function handleContextMenuExecute(ev) {
    console.log(`MainCanvas executing: ${ev.detail}`);
    switch (ev.detail) {
      case "hide-output-pane":
        stateAware.dispatch(outputHideAction());
        break;
      case "output-pane-left":
        stateAware.dispatch(outputSetLeftAction());
        break;
      case "output-pane-right":
        stateAware.dispatch(outputSetRightAction());
        break;
      case "output-pane-bottom":
        stateAware.dispatch(outputSetBottomAction());
        break;
    }
  }
</script>

<style>
  div {
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: 10;
    outline: none;
  }
</style>

<svelte:window />
<div tabindex="-1">
  <SplitContainer
    direction={outputPosition === 'bottom' ? 'vertical' : 'horizontal'}
    refreshTag={outputPosition}
    on:moved={() => splitterMoved()}>
    {#if outputPosition === 'left'}
      <OutputFrame
        {tabs}
        {activeTab}
        {activeTabState}
        position={outputPosition}
        {chevronPosition}
        initialSize={horizontalOutputSize}
        bind:outputWidth
        bind:outputHeight
        on:change-position={handleChangeOutputPosition}
        on:hide={() => stateAware.dispatch(outputHideAction())}
        on:contex-menu-execute={handleContextMenuExecute} />
    {/if}
    {#if outputPosition !== 'maximized'}
      <DocumentFrame />
    {/if}
    {#if outputPosition === 'bottom' || outputPosition === 'right' || outputPosition === 'maximized'}
      <OutputFrame
        {tabs}
        {activeTab}
        {activeTabState}
        position={outputPosition}
        {chevronPosition}
        initialSize={outputPosition === 'bottom' ? verticalOutputSize : horizontalOutputSize}
        bind:outputWidth
        bind:outputHeight
        on:change-position={handleChangeOutputPosition}
        on:hide={() => stateAware.dispatch(outputHideAction())}
        on:contex-menu-execute={handleContextMenuExecute} />
    {/if}
  </SplitContainer>
</div>
