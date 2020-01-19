<script>
  import Titlebar from "./shell/Titlebar.svelte";
  import ActivityBar from "./shell/ActivityBar.svelte";
  import SideBar from "./shell/SideBar.svelte";
  import MainCanvas from "./shell/MainCanvas.svelte";
  import Statusbar from "./shell/Statusbar.svelte";
  
  import { ThemeService } from "./tslib/ui/themes/ThemeService";
  import { lightTheme } from "./tslib/ui/themes/light-theme";
  import { darkTheme } from "./tslib/ui/themes/dark-theme";

  let themeStyle = "";
  let themeClass = "";

  ThemeService.themeChanged.on(theme => {
    let styleValue = "";
    for (const key in theme.properties) {
      styleValue += `${key}:${theme.properties[key]};`;
    }
    themeStyle = styleValue.trimRight();
    themeClass = `${theme.name}-theme`;
  });

  ThemeService.registerTheme(lightTheme);
  ThemeService.registerTheme(darkTheme);
  ThemeService.setTheme("dark");

  // var stateAware = createRendererProcessStateAware("appHasFocus");
  // stateAware.onStateChanged.on((state) => console.log(`state: ${state}`));

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

<main style={themeStyle} class={themeClass}>
  <Titlebar />
  <div class="main-panel">
    <ActivityBar />
    <SideBar />
    <MainCanvas />
  </div>
  <Statusbar />
</main>
