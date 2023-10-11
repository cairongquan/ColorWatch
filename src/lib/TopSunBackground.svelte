<script>
  import { onMount } from "svelte";
  import {
    sunRiseSetInfo,
    sunColorHexArray,
    baseRenderSunColorHexArray,
  } from "../store";

  let i = 0;
  setInterval(() => {
    i++;
    if (i === $baseRenderSunColorHexArray.length - 1) {
      i = 0;
    }
  }, 1);
</script>

<div
  class="top-sun-background"
  style="background:linear-gradient({$baseRenderSunColorHexArray[i]})"
/>

<style>
  .top-sun-background {
    width: 100vw;
    height: calc(50vh + 200px);
    transition: background ease 220ms;
    background: "#000";
  }
</style>
