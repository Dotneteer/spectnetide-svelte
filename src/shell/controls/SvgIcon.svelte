<script>
  import { ThemeService } from "../../tslib/front/themes/ThemeService";

  export let xclass = "";
  export let iconName;
  export let width;
  export let height;
  export let fill;
  export let rotate = 0;

  $: fillValue =
    fill === null || fill === undefined
      ? "white"
      : fill.startsWith("--")
      ? ThemeService.getProperty(fill)
      : fill;
  $: styleValue =
    `width:${
      width === undefined
        ? ThemeService.getProperty("--icon-default-size")
        : width
    }px;` +
    `height:${
      height === undefined
        ? ThemeService.getProperty("--icon-default-size")
        : height
    }px;` +
    `fill:${fillValue};` +
    `transform:rotate(${rotate}deg)`;
  $: iconInfo = ThemeService.getIcon(iconName);
</script>

<style>
  svg {
    display: flex;
  }
</style>

<svg
  class={xclass}
  xmlns="http://www.w3.org/2000/svg"
  style={styleValue}
  viewBox="0 0 {iconInfo.width}
  {iconInfo.height}">
  <path d={iconInfo.path} />
</svg>
