<script>
  // ==========================================================================
  // Represents a toolbar icon button that responds to mouse events
  import SvgIcon from "./SvgIcon.svelte";
  import { onMount, createEventDispatcher } from "svelte";

  // ==========================================================================
  // Component parameters

  // --- Normal button size
  export let size = 16;

  // --- Highlighted (button down) button isze
  export let highlightSize = 20;

  // --- Name of the icon in the registry
  export let iconName;

  // --- Button tooltip
  export let title;

  // ==========================================================================
  // Component logic
  const dispatch = createEventDispatcher();

  // --- Signs that the mouse is down on this button
  let isMouseDown;

  $: currentSize = isMouseDown ? highlightSize : size;
</script>

<style>
  .button {
    display: flex;
    width: 28px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
</style>

<div
  class="button"
  {title}
  on:mousedown={ev => (isMouseDown = ev.button === 0)}
  on:mouseleave={() => (isMouseDown = false)}
  on:mouseup={() => (isMouseDown = false)}
  on:click={() => dispatch('clicked')}>
  <SvgIcon {iconName} fill="white" width={currentSize} height={currentSize} />
</div>
