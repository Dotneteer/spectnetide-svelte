<script>
  export let text = "";
  export let highlight = false;

  $: menuText = splitText(text);

  function splitText(title) {
    let preText = "";
    let accessKeyText = "";
    let postText = "";
    if (title) {
      const m = title.match(/^(.*?)?(?:&([^&]))(.*)?$/);
      // --- We have a menu text without accelerator key
      if (!m) {
        preText = title;
      } else {
        if (m[1]) {
          preText = unescape(m[1]);
        }

        accessKeyText = m[2];

        if (m[3]) {
          postText = unescape(m[3]);
        }
      }
    }
    return { preText, accessKeyText, postText };
  }

  function unescape(accessText) {
    return accessText.replace("&&", "&");
  }
</script>

<style>
  div {
    font-size: 0;
  }

  div span {
    font-size: 14px;
  }
  div .access-key.highlight {
    text-decoration: underline;
  }
</style>

<div>
  {#if menuText}
    {#if menuText.preText !== ''}
      <span style="margin:0px">{menuText.preText}</span>
    {/if}
    {#if menuText.accessKeyText !== '' && menuText.accessKeyText != null}
      <span
        style="margin:0px"
        aria-hidden="true"
        class="access-key"
        class:highlight>
        {menuText.accessKeyText}
      </span>
    {/if}
    {#if menuText.postText !== ''}
      <span style="margin:0px" aria-hidden="true">{menuText.postText}</span>
    {/if}
  {/if}
</div>
