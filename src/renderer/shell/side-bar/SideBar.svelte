<script>
  import FloatingScrollbar from "../../controls/FloatingScrollbar.svelte";
  export let initialSize = 192;
</script>

<style>
  .sidebar {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    height: 100%;
    width: 192px;
    background-color: var(--sidebar-background-color);
    position: relative;
  }
</style>

<div class="sidebar" data-initial-size={initialSize}>
  <FloatingScrollbar
    orientation="vertical"
    on:slider-moved={ev => console.log(`Slider position: ${ev.detail}`)} />
</div>
