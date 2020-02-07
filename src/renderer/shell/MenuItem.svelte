<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { friendlyAcceleratorText } from "./MenuItem";

  import SvgIcon from "../controls/SvgIcon.svelte";
  import MenuText from "./MenuText.svelte";

  // ==========================================================================
  // Component parameters
  // --- UiMenuItem representation
  export let item;

  // --- Should be accelerator key highlighted?
  export let highlight;

  // --- Is this item selected?
  export let selected;

  // ==========================================================================
  // Internal variables
  // --- Access the host HTML element
  let hostElement;

  // ==========================================================================
  // Component logic
  const dispatch = createEventDispatcher();

  // --- Notify parent about the item rectangle when rendered
  onMount(() => {
    if (!item.separator) {
      dispatch("itemmounted", {
        left: hostElement.offsetLeft,
        top: hostElement.offsetTop,
        width: hostElement.offsetWidth,
        height: hostElement.offsetHeight
      });
    }
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

  .menu-item .label {
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .menu-item.submenu {
    padding-right: 8px;
  }

  .icon-placeholder {
    width: 18px;
  }

  .separator {
    border: none;
    height: 1px;
    border-bottom: 1px solid #ffffff;
    margin: 4px 10px;
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

<div
  bind:this={hostElement}
  on:mouseenter={() => dispatch('pointed', true)}
  on:mouseleave={() => dispatch('pointed', false)}
  on:click={() => dispatch('clicked')}>
  {#if item.type === "separator"}
    <div class="separator" />
  {:else}
    <div
      class="menu-item"
      class:disabled={!item.enabled}
      class:checked={item.checked}
      class:submenu={item.submenu && item.submenu.length > 0}
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
      {#if item.submenu && item.submenu.length > 0 && item.accelerator}
        <div class="accelerator">
          {friendlyAcceleratorText(item.accelerator)}
        </div>
      {/if}
      {#if item.submenu && item.submenu.length > 0}
        <SvgIcon
          xclass="submenu-icon"
          iconName="submenu-arrow"
          width={14}
          height={14} />
      {/if}
    </div>
  {/if}
</div>
