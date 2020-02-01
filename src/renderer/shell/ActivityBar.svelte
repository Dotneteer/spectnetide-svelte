<script>
  import ActivityButton from "./ActivityButton.svelte"

  import { ActivityService } from "../activity/ActivityService";
  import { rendererProcessStore } from "../rendererProcessStore";

  export let activities;
</script>

<style>
  aside {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    height: 100%;
    width: 48px;
    background-color: var(--activity-bar-background-color);
  }
</style>

<aside>
{#if activities}
  {#each activities as activity}
    <ActivityButton {activity} />
  {/each}
{/if}
</aside>
