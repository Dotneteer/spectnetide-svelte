<script>
  // ==========================================================================
  // Represents the context menu of the application.
  //
  // The context menu displays a single menu pane, it does not support
  // submenus.
  //
  // Displaying the context menu is composed from three phases.
  // 1. The callee issues a "request" call to show a context menu in a
  // particular position.
  // 2. The context menu is displayed with a negative z-index so that it could
  // not be seen in the screen. This is the "render" phase. We need this pahse
  // to get the dimensions of the context menu. If the context menu fits the
  // application window with its top-left corner as requested, it is displayed.
  // If not, the requested position will be the top-right corner, or the
  // bottom-right corner so that the entire context menu can be seen.
  // 3. The context menu is displayed in its calculated position by setting its
  // z-index value to 20.

  import { afterUpdate, onDestroy } from "svelte";
  import { contextMenuStore } from "../../stores/context-menu-store";
  import { createRendererProcessStateAware } from "../../rendererProcessStore";

  import MenuPane from "./MenuPane.svelte";

  import {
    setOnExecute,
    handleKeyDown,
    handleItemPointed,
    handleItemClicked
  } from "./ContextMenu";

  // ==========================================================================
  // Component logic
  let hostElement;

  // --- Track the changes of the application's window size
  let appWindowWidth;
  let appWindowHeight;

  // --- Store current context menu information used for rendering
  let contextMenu;
  let requestedX;
  let requestedY;
  let isDisplayed;

  // --- Track the context menu show phases
  const unsubscribeCtxMenu = contextMenuStore.subscribe(ctx => {
    if (!ctx && !ctx.pane) return;
    contextMenu = Object.assign({}, ctx.pane);
    switch (ctx.state) {
      case "requested":
        requestedX = ctx.requestedX;
        requestedY = ctx.requestedY;
        setOnExecute(ctx.onExecute);
        break;
      case "rendered":
        contextMenuStore.display();
        break;
      case "display":
        isDisplayed = true;
    }
  });

  // --- Whenever the context menu is displayed, we can fosus it
  afterUpdate(() => {
    if (hostElement) {
      hostElement.focus();
    }
  });

  // --- Hide the context menu when the app losts the focus
  const focusAware = createRendererProcessStateAware("appHasFocus");
  focusAware.onStateChanged.on(focused => {
    if (!focused) {
      contextMenuStore.hide();
    }
  });

  // --- When the pane is mounted, we can recalculate the requested
  // --- co-ordinates of the context menu
  function handlePaneMounted(ev) {
    const paneWidth = ev.detail.width;
    const paneHeight = ev.detail.height;

    if (requestedX + paneWidth >= appWindowWidth) {
      requestedX = requestedX - paneWidth;
    }
    if (requestedY + paneHeight >= appWindowHeight) {
      requestedY = requestedY - paneHeight;
    }
    contextMenuStore.render(requestedX, requestedY);
  }

  // --- Release resources
  onDestroy(() => {
    focusAware.onStateChanged.release();
    unsubscribeCtxMenu();
  });
</script>

<style>
  .context-menu-container {
    outline: none;
  }
</style>

<svelte:window
  bind:innerWidth={appWindowWidth}
  bind:innerHeight={appWindowHeight}
  on:keydown={ev => handleKeyDown(contextMenu, ev)} />
{#if contextMenu && contextMenu.items}
  <div
    tabindex="-1"
    bind:this={hostElement}
    class="context-menu-container"
    style="z-index: {isDisplayed ? 20 : -1}"
    on:blur={contextMenuStore.hide}>
    <MenuPane
      on:panemounted={ev => handlePaneMounted(ev)}
      on:itempointed={ev => handleItemPointed(ev.detail)}
      on:itemclicked={ev => handleItemClicked(contextMenu, ev.detail)}
      depth={0}
      items={contextMenu.items}
      leftPos={contextMenu.leftPos}
      topPos={contextMenu.topPos}
      selectedIndex={contextMenu.selectedIndex} />
  </div>
{/if}
