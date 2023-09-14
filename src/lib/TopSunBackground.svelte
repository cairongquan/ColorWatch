<script>
  import { onMount } from "svelte";
  import { sunRiseSetInfo, sunColorHexArray } from "../store";

  onMount(() => {
    console.log($sunRiseSetInfo);
  });
  let i = 0;
  setInterval(() => {
    i++;
    if (i === 7) {
      i = 0;
    }
  }, 2000);
</script>

<div
  class="top-sun-background"
  style="background:linear-gradient({$sunColorHexArray[i]})"
/>

<style>
  .top-sun-background {
    width: 100vw;
    height: calc(50vh + 200px);
    transition: background ease 220ms;
    background: "#000";
  }
</style>
