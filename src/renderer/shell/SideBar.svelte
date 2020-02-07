<script>
  export let initialSize = 192;
</script>

<style>
  .sidebar {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    height: 100%;
    width: 192px;
    background-color: var(--sidebar-background-color);
  }
</style>

<div class="sidebar" data-initial-size={initialSize} />
