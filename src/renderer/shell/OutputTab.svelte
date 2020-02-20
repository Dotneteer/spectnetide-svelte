<script>
  // ==========================================================================
  // Represents a single tab within the output tab bar

  import { createEventDispatcher } from "svelte";

  // ==========================================================================
  // Component parameters
  // --- Tab title/ID
  export let title;

  // --- Is this tab the active one?
  export let active;

  // ==========================================================================
  // Component logic
  
  const dispatch = createEventDispatcher();
</script>

<style>
  div {
    padding: 4px 10px 0px 10px;
    font-family: "Segoe WPC", "Segoe UI", sans-serif;
    font-size: 11px;
    color: var(--output-tab-text-color);
    text-transform: uppercase;
    cursor: pointer;
  }
  div:hover {
    color: var(--output-tab-active-text-color);
  }
  .active {
    border-bottom: 1px solid var(--output-tab-active-text-color);
    color: var(--output-tab-active-text-color);
  }
  
  span {
    line-height: 27px;
    text-align: right;
    display: block;
  }
</style>

<div
  on:click={() => dispatch('selected', title)}>
  <span class:active={active === title}>{title}</span>
</div>
