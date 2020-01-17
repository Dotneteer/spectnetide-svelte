<script>
  import Titlebar from "./shell/Titlebar.svelte";
</script>

<style>
  main {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-shrink: 0;
	user-select: none;
	background-color: #202020
  }
</style>

<main>
  <Titlebar />
</main>
