<script>
  import { createEventDispatcher } from "svelte";
  import { themeStore } from "../../stores/theme-store"
  import { Activity } from "../../../shared/activity/Activity";

  import SvgIcon from "../../controls/SvgIcon.svelte";

  export let activity;
  export let active;
  export let pointed;
  export let isSystem

  const dispatch = createEventDispatcher();
</script>

<style>
  div {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .active {
    background-color: var(--activity-current-background-color);
  }

  .system {
    align-self: flex-end
  }

</style>

<div
  class:active
  class:system={isSystem}
  on:click={() => dispatch('clicked')}
  on:mouseenter={() => dispatch('pointed')}
  on:mouseleave={() => dispatch('unpointed')}>
  
  {#if activity}
    <SvgIcon
      iconName={activity.iconName}
      width="24"
      height="24"
      fill={themeStore.getProperty(active || pointed ? '--activity-current-icon-color' : '--activity-icon-color')} />
  {/if}
</div>
