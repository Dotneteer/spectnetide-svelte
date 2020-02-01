<script>
  import { Activity } from "../../shared/activity/Activity";
  import SvgIcon from "../controls/SvgIcon.svelte";

  export let activity;
</script>

<style>
  div {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

  <div>
{#if activity}
    <SvgIcon iconName={activity.iconName} width="24" height="24" />
{/if}
  </div>
