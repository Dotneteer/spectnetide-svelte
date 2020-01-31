<script>
  import { onMount, onDestroy } from "svelte";
  import MenuButton from "./MenuButton.svelte";
  import MenuPane from "./MenuPane.svelte";

  import {
    createRendererProcessStateAware,
    rendererProcessStore
  } from "../rendererProcessStore";
  import {
    refreshMenuAction,
    menuCloseAllAction
  } from "../../shared/state/redux-menu-state";
  import {
    handleButtonMounted,
    handlePaneMounted,
    handlePaneItemMounted,
    handleKeyDown,
    handleKeyUp,
    handleButtonMouseEnter,
    handleButtonClick,
    handleItemPointed,
    handleItemClicked
  } from "../menu/menu-bar-logic";

  // --- Menu bar title color depends on focused/unfocused state
  export let titleColor;

  // --- Store the app menu here
  let appMenu;

  // --- Respond to the event when menu state changes
  const stateAware = createRendererProcessStateAware("appMenu");
  stateAware.onStateChanged.on(state => {
    appMenu = state;
  });

  // --- Respond to the event when application focus changes
  const focusAware = createRendererProcessStateAware("appHasFocus");
  focusAware.onStateChanged.on(state => {
    if (!state) {
      focusAware.dispatch(menuCloseAllAction());
    }
  });
  onDestroy(() => {
    stateAware.onStateChanged.release();
    focusAware.onStateChanged.release();
  });

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
        on:pointed={() => handleButtonMouseEnter(index)}
        on:clicked={() => handleButtonClick(index)} />
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
          on:paneitemmounted={ev => handlePaneItemMounted(index, ev.detail.index, ev.detail.rectangle)}
          on:itempointed={ev => handleItemPointed(ev.detail)} 
          on:itemclicked={ev => handleItemClicked(ev.detail)}/>
      {/each}
    {/if}
  {/if}
</div>
