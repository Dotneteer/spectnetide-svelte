<script>
  // ==========================================================================
  // Represents the leftmost panel of the shell, the activity bar.

  import { onMount, onDestroy } from "svelte";
  import { createRendererProcessStateAware } from "../../rendererProcessStore";
  import {
    refreshMenuAction,
    changeActivityAction,
    pointActivityAction
  } from "../../../shared/state/redux-activity-state";

  import ActivityButton from "./ActivityButton.svelte";

  // ==========================================================================
  // Component logic
  // --- All activity objects (with corresponding icons)
  let activities;

  // --- Index of the selected activity (-1: none)
  let activeIndex;

  // --- Index of the activity pointed with mouse (-1: none)
  let pointedIndex;

  // --- Respond to the event when activity bar state changes
  let stateAware = createRendererProcessStateAware("activityBar");
  stateAware.onStateChanged.on(state => {
    activities = state.activities;
    activeIndex = state.activeIndex;
    pointedIndex = state.pointedIndex;
  });

  // --- When rendered, let's refresh the list of activities
  onMount(() => stateAware.dispatch(refreshMenuAction()));

  // --- Release resources
  onDestroy(() => stateAware.onStateChanged.release());
</script>

<style>
  .activity-bar {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 0;
    flex-shrink: 0;
    height: 100%;
    width: 48px;
    background-color: var(--activity-bar-background-color);
  }

  .button-area {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .gap-area {
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
  }
</style>

<div class="activity-bar">
  <div class="button-area">
    {#if activities}
      {#each activities as activity, index}
        {#if !activity.isSystemActivity}
          <ActivityButton
            on:clicked={() => stateAware.dispatch(changeActivityAction(index))}
            on:pointed={() => stateAware.dispatch(pointActivityAction(index))}
            on:unpointed={() => stateAware.dispatch(pointActivityAction(-1))}
            {activity}
            active={index === activeIndex}
            pointed={index === pointedIndex}
            isSystem={activity.isSystemActivity} />
        {/if}
      {/each}
    {/if}
  </div>
  <div class="gap-area" />
  <div class="button-area">
    {#if activities}
      {#each activities as activity, index}
        {#if activity.isSystemActivity}
        <ActivityButton
          on:clicked={() => stateAware.dispatch(changeActivityAction(index))}
          on:pointed={() => stateAware.dispatch(pointActivityAction(index))}
          on:unpointed={() => stateAware.dispatch(pointActivityAction(-1))}
          {activity}
          active={index === activeIndex}
          pointed={index === pointedIndex}
          isSystem={activity.isSystemActivity} />
        {/if}
      {/each}
    {/if}
  </div>
</div>
