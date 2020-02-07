<script>
  import { onMount } from "svelte";
  import Split from "../controls/Splitter";
  import { calculateInitialSizes } from "./SplitContainer";

  // ==========================================================================
  // Component properties

  // --- Component split orientation: "horizontal"/"vertical"
  export let orientation = "horizontal";
  
  // --- Size of the gutter
  export let gutterSize = 8;

  // --- Calculated properties used for styling
  $: flexDir = {
    "flex-direction": orientation === "horizontal" ? "row" : "column"
  };
  $: size = orientation === "horizontal" ? "clientWidth" : "clientHeight";

  // --- Reference to the host element
  let hostElement;

  // --- Resize the splitter every time the component is rendered
  onMount(() => {
    const children = hostElement.querySelectorAll("div");
    const sizes = calculateInitialSizes(hostElement[size], 100, children);
    Split(children, { sizes, gutterSize });
  });
</script>

<style>
  .split-container {
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    height: 100%;
    width: 100%;
  }
</style>

<div bind:this={hostElement} class="split-container" style={flexDir}>
  <slot />
</div>
