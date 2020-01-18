<script>
 import MenuButton from "./MenuButton.svelte"
</script>

<style>
  div {
    display: flex;
    flex-grow: 0;
    height: 100%;
    -webkit-app-region: no-drag;
  }
  div:focus {
    outline: none;
  }
</style>

<div tabindex="0">
  <MenuButton text="&File" highlight="true" titleColor="yellow" on:pointed={() => console.log('pointed.')} />
  <MenuButton text="&View" highlight="true"/>
  <MenuButton text="H&elp" highlight="true"/>
</div>
