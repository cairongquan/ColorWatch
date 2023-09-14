<script>
  import BottomSunBackground from "$lib/BottomSunBackground.svelte";
  import TopSunBackground from "$lib/TopSunBackground.svelte";
  import SunClock from "$lib/SunClock.svelte";
  import { sunColorHexArray } from "./store";
</script>

<div class="sun-watch-container">
  <div class="sun-watch-container__top">
    {#if $sunColorHexArray.length}
      <TopSunBackground />
    {/if}
  </div>
  <SunClock />
  <div class="sun-watch-container__bottom">
    <BottomSunBackground />
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
