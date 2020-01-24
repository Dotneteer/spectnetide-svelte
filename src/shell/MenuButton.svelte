<script>
  import { onMount } from "svelte";

  import MenuText from "./MenuText.svelte";
  import { createEventDispatcher } from "svelte";

  export let text;
  export let highlight = false;
  export let pointed = false;
  export let titleColor;
  export let topPos;
  export let leftPos;

  const dispatch = createEventDispatcher();

  let hostElement;

  onMount(() => {
    topPos = hostElement.offsetTop;
    leftPos = hostElement.offsetLeft;
    console.log(`(${leftPos},${topPos})`);
  });
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
  bind:this={hostElement}
  style="color:{titleColor}"
  class:pointed
  on:mouseenter={() => dispatch('pointed')}
  on:click={() => dispatch('clicked')}>
  <MenuText {text} {highlight} />
</div>
