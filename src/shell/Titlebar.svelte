<script>
  import SvgIcon from "../controls/SvgIcon.svelte";
  import MenuBar from "./MenuBar.svelte";
  import AppCaption from "./AppCaption.svelte";

let state = "normal";
</script>

<style>
  .component {
    display: flex;
    flex-shrink: 0;
    height: 30px;
    color: white;
    box-sizing: border-box;
    align-items: center;
    justify-content: start;
    font-size: 0.9em;
    background-color: var(--menu-bar-background-color);
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

<div class="component">
  <div class="logo">
    <img alt="logo" src="./assets/spectnet-logo.png" />
  </div>
  <MenuBar />
  <AppCaption />
  <div class="title-buttons">
    <div class="window-control">
      <SvgIcon iconName="minimize" fill="white" width="10" height="10" />
    </div>
    {#if state === 'normal'}
      <div class="window-control">
        <SvgIcon iconName="restore" fill="white" width="10" height="10" />
      </div>
    {:else}
      <div class="window-control">
        <SvgIcon iconName="maximize" fill="white" width="10" height="10" />
      </div>
    {/if}
    <div class="window-control close">
      <SvgIcon iconName="close-lean" fill="white" width="10" height="10" />
    </div>
  </div>
</div>
