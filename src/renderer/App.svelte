<script>
  import SplitContainer from "./shell/SplitContainer.svelte";
  import Titlebar from "./shell/Titlebar.svelte";
  import ActivityBar from "./shell/ActivityBar.svelte";
  import SideBar from "./shell/SideBar.svelte";
  import MainCanvas from "./shell/MainCanvas.svelte";
  import Statusbar from "./shell/Statusbar.svelte";

  import { ThemeService } from "./themes/ThemeService";
  import { lightTheme } from "./themes/light-theme";
  import { darkTheme } from "./themes/dark-theme";  

  // --- Set up application themes
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
</main>
