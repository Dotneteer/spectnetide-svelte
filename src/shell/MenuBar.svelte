<script>
  import { onMount, onDestroy } from "svelte";
  import MenuButton from "./MenuButton.svelte";

  import {
    createRendererProcessStateAware,
    rendererProcessStore
  } from "../tslib/front/rendererProcessStore";
  import { refreshMenuAction } from "../tslib/shared/state/redux-menu-state";

  export let titleColor;

  let menuState;

  // --- Respond to the event when manu state changes
  var stateAware = createRendererProcessStateAware("appMenu");
  stateAware.onStateChanged.on(state => {
    menuState = state;
  });
  onDestroy(() => stateAware.onStateChanged.release());
  onMount(() => {
    stateAware.dispatch(refreshMenuAction());
  });
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
  <MenuButton
    text="&File"
    highlight="true"
    {titleColor}
    on:pointed={() => console.log('pointed.')} />
  <MenuButton text="&View" highlight="true" {titleColor} />
  <MenuButton text="H&elp" highlight="true" {titleColor} />
</div>
