<script>
  // ==========================================================================
  // Represents the main canvas that holds a document window frame and an
  // output window frame

  import SplitContainer from "./SplitContainer.svelte";
  import DocumentFrame from "./DocumentFrame.svelte";
  import OutputFrame from "./OutputFrame.svelte";

  // ==========================================================================
  // Component parameters
  // --- Output window position: "left" | "bottom" | "right" | "hidden"
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
        outputPosition = "left";
        break;
    }
  }

  // --- Store output window sizes whenever the splitter moves.
  function splitterMoved() {
    console.log(`o: ${outputPosition}`);
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
  {#if outputPosition === 'left'}
    <SplitContainer
      direction="horizontal"
      gutterSize="4"
      on:moved={() => splitterMoved()}>
      <OutputFrame
        initialSize={horizontalOutputSize}
        bind:outputWidth
        bind:outputHeight />
      <DocumentFrame />
    </SplitContainer>
  {:else if outputPosition === 'right'}
    <SplitContainer
      direction="horizontal"
      gutterSize="4"
      on:moved={() => splitterMoved()}>
      <DocumentFrame />
      <OutputFrame
        initialSize={horizontalOutputSize}
        bind:outputWidth
        bind:outputHeight />
    </SplitContainer>
  {:else if outputPosition === 'bottom'}
    <SplitContainer
      direction="vertical"
      gutterSize="4"
      on:moved={() => splitterMoved()}>
      <DocumentFrame />
      <OutputFrame
        initialSize={verticalOutputSize}
        bind:outputWidth
        bind:outputHeight />
    </SplitContainer>
  {:else}
    <DocumentFrame />
  {/if}
</div>
