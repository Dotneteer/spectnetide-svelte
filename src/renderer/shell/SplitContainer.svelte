<script>
  // ==========================================================================
  // Generic container for panels that have splitters (gutters) among them.

  import { onMount, onDestroy } from "svelte";
  import Split from "../controls/Splitter";
  import {
    splitterMoved,
    raiseSplitterMoved,
    filterChildren,
    calculateInitialSizes,
    removeGutters
  } from "./SplitContainer";
  import { isDescendant } from "../../shared/html-utils";

  // --- Component split direction: "horizontal"/"vertical"
  export let direction = "horizontal";

  // --- Size of the gutter
  export let gutterSize = 8;

  // --- Calculated properties used for styling
  $: flexDir = `flex-direction: ${
    direction === "horizontal" ? "row" : "column"
  }`;
  $: size = direction === "horizontal" ? "clientWidth" : "clientHeight";

  // --- Reference to the host element
  let hostElement;

  onMount(() => {
    // --- Notify child splitters when this one is moved
    splitterMoved.on(onSplitterMoved);
    // --- Resize the splitter every time the component is rendered
    setupSplitter(true);
  });
  onDestroy(() => {
    // --- Unsubscribe from movement events
    splitterMoved.off(onSplitterMoved);
  });

  // --- Set up the size of the splitter and its panels
  function setupSplitter(isInitial) {
    removeGutters(hostElement);
    let children = hostElement.querySelectorAll("div");
    children = filterChildren(hostElement, children);
    if (children.length < 2) return;

    const sizes = calculateInitialSizes(
      hostElement[size],
      size,
      100,
      children,
      isInitial
    );
    Split(children, {
      sizes,
      gutterSize,
      direction,
      floatingGutter: true,
      onDragEnd: () => raiseSplitterMoved(hostElement)
    });
  }

  // --- Notify child splitters
  function onSplitterMoved(node) {
    if (isDescendant(node, hostElement)) {
      setupSplitter(false);
    }
  }
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

<svelte:window on:resize={() => setupSplitter(false)} />
<div bind:this={hostElement} class="split-container" style={flexDir}>
  <slot />
</div>
