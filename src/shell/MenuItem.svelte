<script>
  import { onMount } from "svelte";
  import SvgIcon from "./controls/SvgIcon.svelte";
  import MenuText from "./MenuText.svelte";
  import { friendlyAcceleratorText } from "../tslib/front/menu/menu-item-logic";

  export let item;
  export let highlight;
  export let selected;
  export let topPos;
  export let leftPos;

  let hostElement;

  onMount(() => {
    topPos = hostElement.offsetTop;
    leftPos = hostElement.offsetLeft;
    console.log(`(${leftPos},${topPos})`);
  });
</script>

<style>
  .menu-item {
    display: flex;
    align-items: center;
    flex-grow: 1;
    height: 100%;
    width: 100%;
    min-width: 0;
    padding: 2px 24px 2px 6px;
    color: var(--menu-text-color);
  }

  .menu-item.selected {
    background: var(--menu-selected-background);
  }

  .menu-item.disabled {
    opacity: 0.3;
  }

  .menu-item.label {
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .menu-item.submenu {
    padding-right: 8px;
  }

  .icon {
    margin-right: 4px;
  }

  .icon-placeholder {
    width: 18px;
  }

  .separator {
    border: none;
    height: 1px;
    border-bottom: 1px solid #ffffff;
    margin: 4px 0px;
    opacity: 0.3;
  }

  .accelerator {
    display: flex;
    flex-shrink: 0;
    flex-grow: 1;
    justify-content: flex-end;
    margin-left: 12px;
  }

  .submenu-icon {
    margin-left: 4px;
    margin-top: 2px;
  }
</style>

<div bind:this={hostElement}>
  {#if item.separator}
    <div class="separator" />
  {:else}
    <div
      class="menu-item"
      class:disabled={!item.enabled}
      class:checked={item.checked}
      class:submenu={item.items.length > 0}
      class:selected>
      {#if item.checked}
        <SvgIcon
          class="icon"
          iconName={item.checked ? 'check' : null}
          width={14}
          height={14} />
      {:else}
        <div class="icon-placeholder" />
      {/if}
    <div class="label">
      <MenuText text={item.label} {highlight} />
    </div>
    {#if item.items.length > 0 && item.accelerator}
      <div class="accelerator">{friendlyAcceleratorText(item.accelerator)}</div>
    {/if}
    {#if item.items.length > 0}
      <SvgIcon
        xclass="submenu-icon"
        iconName="submenu-arrow"
        width={14}
        height={14} />
    {/if}
    </div>
  {/if}
</div>
