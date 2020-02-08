<script>
  // ==========================================================================
  // Represents the shell's title bar with the logo, menu bar, title and drag
  // area, and window chrome buttons.
  
  import { onDestroy } from "svelte";
  import "../../../public/assets/spectnet-logo.png"

  import SvgIcon from "../controls/SvgIcon.svelte";
  import MenuBar from "./MenuBar.svelte";
  import AppCaption from "./AppCaption.svelte";

  import { ThemeService } from "../themes/ThemeService";
  import {
    minimizeAppWindowAction,
    restoreAppWindowAction,
    maximizeAppWindowAction
  } from "../../shared/state/redux-window-state";
  import { createRendererProcessStateAware } from "../rendererProcessStore";
  import { executeCommand } from "../helpers/commands.ts"

  // --- We change Titlebar colors as the app focus changes
  let titleColor;
  let backgroundColor;
  calculateColors(true); // --- Default: the app has the focus

  // --- Default window state is normal
  let windowState = "normal";

  // --- Respond to the event when app focus changes
  var stateAware = createRendererProcessStateAware();
  stateAware.onStateChanged.on(state => {
    windowState = state.windowState;
    calculateColors(state.appHasFocus);
  });

  // --- Release resources
  onDestroy(() => stateAware.onStateChanged.release());

  // --- Calculate colors according to focus state
  function calculateColors(focused) {
    let propName = focused
      ? "--titlebar-focused-background-color"
      : "--titlebar-background-color";
    backgroundColor = ThemeService.getProperty(propName);
    propName = focused
      ? "--titlebar-focused-text-color"
      : "--titlebar-text-color";
    titleColor = ThemeService.getProperty(propName);
  }
</script>

<style>
  .component {
    display: flex;
    flex-shrink: 0;
    height: 30px;
    color: var(--titlebar-text-color);
    box-sizing: border-box;
    align-items: center;
    justify-content: start;
    font-size: 0.9em;
    -webkit-app-region: drag;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin: 0px 8px;
  }

  .title-buttons {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    height: 100%;
    -webkit-app-region: no-drag;
  }

  .window-control {
    display: flex;
    width: 45px;
    align-items: center;
    justify-content: center;
  }

  .window-control:hover {
    background-color: var(--menu-active-background-color);
  }

  .window-control:hover.close {
    background-color: #d71526;
  }
</style>

<div
  class="component"
  style="color:{titleColor};background-color:{backgroundColor}">
  <div class="logo">
    <img alt="logo" src="./public/assets/spectnet-logo.png" />
  </div>
  <MenuBar {titleColor} />
  <AppCaption title="ZX Spectrum IDE"/>
  <div class="title-buttons">
    <div
      class="window-control"
      on:click={() => stateAware.dispatch(minimizeAppWindowAction())}>
      <SvgIcon iconName="minimize" fill="white" width="10" height="10" />
    </div>
    {#if windowState !== 'normal'}
      <div
        class="window-control"
        on:click={() => stateAware.dispatch(restoreAppWindowAction())}>
        <SvgIcon iconName="restore" fill="white" width="10" height="10" />
      </div>
    {:else}
      <div
        class="window-control"
        on:click={() => stateAware.dispatch(maximizeAppWindowAction())}>
        <SvgIcon iconName="maximize" fill="white" width="10" height="10" />
      </div>
    {/if}
    <div class="window-control close"
        on:click={() => executeCommand("quit")}>
      <SvgIcon iconName="close-lean" fill="white" width="10" height="10" />
    </div>
  </div>
</div>
