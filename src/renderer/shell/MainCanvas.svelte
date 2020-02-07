<script>
  import SplitContainer from "./SplitContainer.svelte";
  import DocumentFrame from "./DocumentFrame.svelte";
  import OutputFame from "./OutputFrame.svelte";
</script>

<style>
  div {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    z-index: 10;
  }
</style>

<div>
  <SplitContainer direction="vertical" gutterSize="4">
    <DocumentFrame />
    <OutputFame />
  </SplitContainer>
</div>
