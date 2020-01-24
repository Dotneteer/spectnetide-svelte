<script>
  import { onMount, onDestroy } from "svelte";
  import MenuButton from "./MenuButton.svelte";
  import MenuPane from "./MenuPane.svelte";

  import {
    createRendererProcessStateAware,
    rendererProcessStore
  } from "../tslib/front/rendererProcessStore";
  import { refreshMenuAction } from "../tslib/shared/state/redux-menu-state";

  // --- Menu bar title color depends on focused/unfocused state
  export let titleColor;

  // --- Store the app menu here
  let appMenu;

  // --- Respond to the event when manu state changes
  var stateAware = createRendererProcessStateAware("appMenu");
  stateAware.onStateChanged.on(state => {
    appMenu = state;
    if (appMenu) {
    console.log(appMenu.menu.items[0]);
    }
  });
  onDestroy(() => stateAware.onStateChanged.release());

  // --- Query the app menu the first time the component is rendered.
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
  {#if appMenu}
  {#each appMenu.menu.items as item, index}
  <MenuButton
    text={item.label}
    highlight={appMenu.highlightAccessKeys || false}
    pointd={appMenu.selectedIndex === index}
    {titleColor}
    on:pointed={(e) => console.log(`pointed: ${index}`)} 
    on:clicked={(e) => console.log(`clicked: ${index}`)}/>
  {/each}
  <MenuPane items={appMenu.menu.items[0].items} highlight={true} depth={0} leftPos={46} topPos={30}/>
  {/if}
</div>
