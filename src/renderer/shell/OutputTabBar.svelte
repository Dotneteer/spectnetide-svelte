<script>
  import { createEventDispatcher } from "svelte";

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
  .output-tab-bar {
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    flex-wrap: wrap;
    overflow: hidden;
    height: 100%;
  }
</style>

<div
  class="output-tab-bar"
  on:mousedown={handleMouseDown}
  on:mouseup={handleMouseUp}>
  Output Tab Bar
</div>
