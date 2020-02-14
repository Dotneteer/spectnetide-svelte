<script>
  // ==========================================================================
  // Represents the main canvas that holds a document window frame and an
  // output window frame

  import { onDestroy } from "svelte";
  import SplitContainer from "./SplitContainer.svelte";
  import DocumentFrame from "./DocumentFrame.svelte";
  import OutputFrame from "./OutputFrame.svelte";
  import { createRendererProcessStateAware } from "../rendererProcessStore";
  import {
    outputSetBottomAction,
    outputSetLeftAction,
    outputSetRightAction,
    outputMaximizeAction,
    outputHideAction,
    outputRestoreAction
  } from "../../shared/state/redux-main-canvas-state";

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
  let activeTab = "output";

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
    console.log(state);
  });


  function rotatePos() {
    switch (outputPosition) {
      case "left":
        stateAware.dispatch(outputSetBottomAction());
        break;
      case "bottom":
        stateAware.dispatch(outputSetRightAction());
        break;
      case "right":
        stateAware.dispatch(outputHideAction());
        break;
      case "hidden":
        stateAware.dispatch(outputMaximizeAction());
        break;
      case "maximized":
        stateAware.dispatch(outputSetLeftAction());
        break;
    }
  }

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

  // --- Release resources
  onDestroy(() => stateAware.onStateChanged.release());
</script>

<style>
  div {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    z-index: 10;
  }
</style>

<svelte:window on:keydown={() => rotatePos()} />
<div>
  <SplitContainer
    direction={outputPosition === 'bottom' ? 'vertical' : 'horizontal'}
    refreshTag={outputPosition}
    on:moved={() => splitterMoved()}>
    {#if outputPosition === 'left'}
      <OutputFrame
        {activeTab}
        position={outputPosition}
        {chevronPosition}
        initialSize={horizontalOutputSize}
        bind:outputWidth
        bind:outputHeight
        on:change-position={ev => handleChangeOutputPosition()}
        on:hide={() => stateAware.dispatch(outputHideAction())} />
    {/if}
    {#if outputPosition !== 'maximized'}
      <DocumentFrame />
    {/if}
    {#if outputPosition === 'bottom' || outputPosition === 'right' || outputPosition === 'maximized'}
      <OutputFrame
        {activeTab}
        position={outputPosition}
        {chevronPosition}
        initialSize={outputPosition === 'bottom' ? verticalOutputSize : horizontalOutputSize}
        bind:outputWidth
        bind:outputHeight
        on:change-position={ev => handleChangeOutputPosition()} 
        on:hide={() => stateAware.dispatch(outputHideAction())} />
    {/if}
  </SplitContainer>
</div>
