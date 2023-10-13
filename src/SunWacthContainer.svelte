<script>
  import BottomSunBackground from "$lib/BottomSunBackground.svelte";
  import TopSunBackground from "$lib/TopSunBackground.svelte";
  import SunClock from "$lib/SunClock.svelte";
  import { sunColorHexArray, baseRenderSunColorBottomHexArray } from "./store";

  let i = 0;
  setInterval(() => {
    if (i === $sunColorHexArray.length) {
      i = 0;
    }
    i++;
  }, 100);
</script>

<div class="sun-watch-container">
  <div class="sun-watch-container__top">
    {#if $sunColorHexArray.length}
      <TopSunBackground {i} />
    {/if}
  </div>
  <SunClock />
  <div class="sun-watch-container__bottom">
    {#if $baseRenderSunColorBottomHexArray.length}
      <BottomSunBackground {i} />
    {/if}
  </div>
</div>

<style>
  .sun-watch-container {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
  .sun-watch-container__bottom {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .sun-watch-container__top {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
