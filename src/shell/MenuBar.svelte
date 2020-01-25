<script>
  import { onMount, onDestroy } from "svelte";
  import MenuButton from "./MenuButton.svelte";
  import MenuPane from "./MenuPane.svelte";

  import {
    createRendererProcessStateAware,
    rendererProcessStore
  } from "../tslib/front/rendererProcessStore";
  import { refreshMenuAction } from "../tslib/shared/state/redux-menu-state";
  import {
    handleButtonMounted,
    handlePaneMounted,
    handlePaneItemMounted,
    handleKeyDown,
    handleKeyUp
  } from "../tslib/front/menu/menu-bar-logic";

  // --- Menu bar title color depends on focused/unfocused state
  export let titleColor;

  // --- Store the app menu here
  let appMenu;

  // --- Respond to the event when manu state changes
  const stateAware = createRendererProcessStateAware("appMenu");
  stateAware.onStateChanged.on(state => {
    appMenu = state;
    console.log(appMenu);
  });
  onDestroy(() => stateAware.onStateChanged.release());

  // --- Query the app menu the first time the component is rendered.
  onMount(() => {
    stateAware.dispatch(refreshMenuAction());
  });

  // --- Keep information about open panes
  let panes = [];
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

<svelte:window on:keydown={handleKeyDown} on:keyup={handleKeyUp} />
<div tabindex="0">
  {#if appMenu}
    {#each appMenu.menu.items as item, index}
      <MenuButton
        text={item.label}
        highlight={appMenu.highlightAccessKeys || false}
        pointed={appMenu.selectedIndex === index}
        {titleColor}
        on:buttonmounted={e => handleButtonMounted(index, e.detail)}
        on:pointed={e => console.log(`pointed: ${index}`)}
        on:clicked={e => console.log(`clicked: ${index}`)} />
    {/each}
    {#if appMenu.openPanes}
      {#each appMenu.openPanes as pane, index (pane.id)}
        <MenuPane
          depth={index}
          items={pane.items}
          highlight={appMenu.highlightAccessKeys || false}
          selectedIndex={pane.selectedIndex}
          leftPos={pane.leftPos}
          topPos={pane.topPos}
          on:panemounted={ev => handlePaneMounted(index, ev.detail)} 
          on:paneitemmounted={ev => handlePaneItemMounted(index, ev.detail.index, ev.detail.rectangle)}/>
      {/each}
    {/if}
  {/if}
</div>
