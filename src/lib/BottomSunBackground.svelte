<script>
  import { onMount } from "svelte";
  import {
    sunRiseSetInfo,
    sunColorHexArray,
    baseRenderSunColorBottomHexArray,
    baseRenderSunColorMiddleHexArray,
  } from "../store";

  let i = 0;
  console.log(
    $baseRenderSunColorMiddleHexArray,
    "baseRenderSunColorMiddleHexArray"
  );
  setInterval(() => {
    i++;
    if (i === $baseRenderSunColorBottomHexArray.length - 1) {
      i = 0;
    }
  }, 1);
</script>

<div
  class="bottom-sun-background"
  style="background:linear-gradient({$baseRenderSunColorBottomHexArray[i]})"
>
  <div
    class="bottom-sun-background__bottom"
    style="border-bottom-color:{$baseRenderSunColorMiddleHexArray[i]};"
  />
</div>

<style>
  .bottom-sun-background {
    width: 100vw;
    height: calc(50vh - 80px);
    position: relative;
  }
  .bottom-sun-background__bottom {
    position: absolute;
    top: -80px;
    left: 0;
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
    border-bottom: 80px solid;
  }
</style>
