<script>
  import MenuText from "./MenuText.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let text;
  //export let index = 0;
  export let highlight = false;
  export let pointed = false;
  export let titleColor = "red";
</script>

<style>
  div {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 2px 8px;
    border: 1px solid transparent;
  }

  div.pointed {
    background-color: var(--menu-active-background-color);
  }
</style>

<div
  style="color:{titleColor}"
  class:pointed
  on:mouseenter={() => dispatch('pointed')}
  on:click={() => dispatch('clicked')}>
  <MenuText {text} {highlight} />
</div>
