<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import MenuItem from "./MenuItem.svelte";

  // ==========================================================================
  // Component parameters
  // --- Pane depth
  export let depth;

  // --- Command items of the pane
  export let items;

  // --- Should be accelerator keys highlighted?
  export let highlight;

  // --- Left position
  export let leftPos;

  // --- Top position
  export let topPos;

  // --- Index of the selected item
  export let selectedIndex;

  // ==========================================================================
  // Internal variables
  // --- Access the host HTML element
  let hostElement;

  // ==========================================================================
  // Component logic
  const dispatch = createEventDispatcher();

  onMount(() => {
    dispatch("panemounted", {
      left: hostElement.offsetLeft,
      top: hostElement.offsetTop,
      width: hostElement.offsetWidth,
      height: hostElement.offsetHeight
    });
  });

</script>

<style>
  .menu-pane {
    position: absolute;
    left: 100px;
    top: 50px;
    background-color: var(--menu-pane-background-color);
    box-shadow: var(--menu-pane-shadow);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 8px 0px;
  }
</style>

<div
  bind:this={hostElement}
  class="menu-pane"
  style="z-index:{depth + 100};top:{topPos}px;left:{leftPos}px">
  {#if items}
    {#each items as item, index}
      <MenuItem
        {item}
        {highlight}
        selected={selectedIndex === index}
        on:itemmounted={ev => {
          dispatch('paneitemmounted', {
            index: index,
            rectangle: ev.detail
          });
        }}
        on:pointed={ev => dispatch('itempointed', {
            depth,
            flatIndex: ev.detail ? index : -1
          })}
        on:clicked={ev => dispatch('itemclicked', {
            depth,
            flatIndex: index
          })} />
    {/each}
  {/if}
</div>
