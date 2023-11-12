<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { timeValue } from "../store/index";
  import * as pixels from "../util/numberPixel";
  import { createPixelByData } from "../util/createPixelByData";

  let currentDateArray = [];
  const firstRawData = {
    color: "",
    logo: "",
    canvas: null,
    active: {
      current: true,
    },
    renderScale: 1,
    theme: "light",
  };
  const secondRawData = {
    color: "",
    logo: "",
    canvas: null,
    active: {
      current: true,
    },
    renderScale: 1,
    theme: "light",
  };
  onMount(() => {
    timeValue.subscribe(({ timerInfo }) => {
      if (timerInfo) {
        const nowminute = new Date(timerInfo).getMinutes();
        const minuteArray = (
          String(nowminute).length < 2
            ? String(nowminute).padStart(2, "0")
            : String(nowminute)
        ).split("");
        if (currentDateArray[0] !== minuteArray[0]) {
          const currentPixel = pixels.numberPixels[Number(minuteArray[0])];
          currentDateArray[0] = minuteArray[0];
          firstRawData.color = currentPixel.color;
          firstRawData.logo = currentPixel.pixel;
          firstRawData.canvas = document.querySelector(".minute_first");
          createPixelByData(firstRawData).start();
        }
        if (currentDateArray[1] !== minuteArray[1]) {
          const currentPixel = pixels.numberPixels[Number(minuteArray[1])];
          currentDateArray[1] = minuteArray[1];
          secondRawData.color = currentPixel.color;
          secondRawData.logo = currentPixel.pixel;
          secondRawData.canvas = document.querySelector(".minute_second");
          createPixelByData(secondRawData).start();
        }
      }
    });
  });
</script>

<div class="pixel-minute">
  <canvas class="minute_first" width="200" height="200" />
  <canvas class="minute_second" width="200" height="200" />
</div>

<style>
  .pixel-minute {
    display: flex;
    align-items: center;
    height: 200px;
  }
  .pixel-minute :first-child {
    margin-right: 20px;
  }
</style>
