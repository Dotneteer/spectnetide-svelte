<script>
  import {a} from "../tslib/themes/hello"
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
</style>

<div class="component">
  <div class="logo">
    <img alt="logo" src="./assets/spectnet-logo.png" />
  </div>
  <p>{a}</p>
</div>
