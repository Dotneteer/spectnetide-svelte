<script>
  import OutputTabBar from "./OutputTabBar.svelte";
  import SvgIcon from "../controls/SvgIcon.svelte";

  export let position;

  let chevron = "up";
  let previousPosition = "bottom";

  $: {
    (() => {
      if (position === "maximized") {
        switch (previousPosition) {
          case "left":
            chevron = "left";
            break;
          case "right":
            chevron = "right";
            break;
          case "bottom":
            chevron = "down";
        }

      } else {
        switch (position) {
          case "left":
            chevron = "right";
            break;
          case "right":
            chevron = "left";
            break;
          case "bottom":
            chevron = "up";
        }
      }
      previousPosition = position;
    })(position);
  }
</script>

<style>
  .output-title {
    display: flex;
    flex-shrink: 0;
    height: 35px;
    width: 100%;
    color: var(--titlebar-text-color);
    box-sizing: border-box;
    align-items: center;
    justify-content: start;
    font-size: 0.9em;
  }

  .title-buttons {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    height: 100%;
    -webkit-app-region: no-drag;
  }

  .button {
    display: flex;
    width: 28px;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="output-title">
  <OutputTabBar />
  <div class="title-buttons">
    <div class="button">
      <SvgIcon
        iconName={'chevron-' + chevron}
        fill="white"
        width="16"
        height="16" />
    </div>
    <div class="button">
      <SvgIcon iconName="chrome-close" fill="white" width="14" height="14" />
    </div>
  </div>
</div>
