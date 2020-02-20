<script>
  import { onDestroy } from "svelte";
  import { windowSizeStore } from "../renderer/stores/window-size-store"
  import { themeStore } from "../renderer/stores/theme-store"
  
  import SplitContainer from "./controls/SplitContainer.svelte";
  import Titlebar from "./shell/app-frame/Titlebar.svelte";
  import ActivityBar from "./shell/activity-bar/ActivityBar.svelte";
  import SideBar from "./shell/side-bar/SideBar.svelte";
  import MainCanvas from "./shell/app-frame/MainCanvas.svelte";
  import Statusbar from "./shell/app-frame/Statusbar.svelte";
  import ContextMenu from "./shell/menu/ContextMenu.svelte";

  import { lightTheme } from "./themes/light-theme";
  import { darkTheme } from "./themes/dark-theme";  

  // --- Set up application themes
  let themeStyle = "";
  let themeClass = "";

  const unsubscribe = themeStore.subscribe(theme => {
    let styleValue = "";
    for (const key in theme.properties) {
      styleValue += `${key}:${theme.properties[key]};`;
    }
    themeStyle = styleValue.trimRight();
    themeClass = `${theme.name}-theme`;
  })

  onDestroy(unsubscribe);

  themeStore.registerTheme(lightTheme);
  themeStore.registerTheme(darkTheme);
  themeStore.setTheme("dark");

  let windowWidth;
  let windowHeight;

  $: ((width, height) => {
    if (width && height) {
      windowSizeStore.setSize({ width, height});
    }
  })(windowWidth, windowHeight)
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
    background-color: var(--shell-canvas-background-color);
    outline: none;
  }

  .main-panel {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-shrink: 1;
    height: 100%;
    width: 100%;
  }

</style>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />
<main style={themeStyle} class={themeClass} tabindex="0">
  <Titlebar />
  <div class="main-panel">
    <ActivityBar />
    <SplitContainer gutterSize="4">
      <SideBar />
      <MainCanvas />
    </SplitContainer>
  </div>
  <Statusbar />
  <ContextMenu />
</main>
