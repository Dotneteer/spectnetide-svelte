<script>
  // ==========================================================================
  // Represents the main canvas that holds a document window frame and an
  // output window frame

  import SplitContainer from "./SplitContainer.svelte";
  import DocumentFrame from "./DocumentFrame.svelte";
  import OutputFrame from "./OutputFrame.svelte";

  // ==========================================================================
  // Component parameters
  // --- Output window position
  // --- "left" | "bottom" | "right" | "hidden" | maximized
  export let outputPosition = "bottom";

  // ==========================================================================
  // Internal variables
  let verticalOutputSize = 240;
  let horizontalOutputSize = 240;

  // --- Current dimensions of the output window
  let outputWidth;
  let outputHeight;

  // ==========================================================================
  // Component logic
  function rotatePos() {
    switch (outputPosition) {
      case "left":
        outputPosition = "bottom";
        break;
      case "bottom":
        outputPosition = "right";
        break;
      case "right":
        outputPosition = "hidden";
        break;
      case "hidden":
        outputPosition = "maximized";
        break;
      case "maximized":
        outputPosition = "left";
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
        position={outputPosition}
        initialSize={horizontalOutputSize}
        bind:outputWidth
        bind:outputHeight />
    {/if}
    {#if outputPosition !== 'maximized'}
      <DocumentFrame />
    {/if}
    {#if outputPosition === 'bottom' || outputPosition === 'right' || outputPosition === 'maximized'}
      <OutputFrame
        position={outputPosition}
        initialSize={outputPosition === 'bottom' ? verticalOutputSize : horizontalOutputSize}
        bind:outputWidth
        bind:outputHeight />
    {/if}
  </SplitContainer>
</div>
