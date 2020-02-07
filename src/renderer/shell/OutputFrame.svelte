<script>
  // ==========================================================================
  // Represents the output window frame

  // ==========================================================================
  // Component parameters
  // --- Initial size of the output frame
  export let initialSize;

  // --- Current output frame dimensions
  export let outputWidth;
  export let outputHeight;
</script>

<style>
  .output-frame {
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: yellow;
  }
</style>

<div
  class="output-frame"
  data-initial-size={initialSize}
  bind:clientWidth={outputWidth}
  bind:clientHeight={outputHeight} />
