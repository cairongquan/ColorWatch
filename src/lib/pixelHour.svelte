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
        const nowHour = new Date(timerInfo).getHours();
        const hourArray = (
          String(nowHour).length < 2
            ? String(nowHour).padStart(2, "0")
            : String(nowHour)
        ).split("");
        if (currentDateArray[0] !== hourArray[0]) {
          const currentPixel = pixels.numberPixels[Number(hourArray[0])];
          currentDateArray[0] = hourArray[0];
          firstRawData.color = currentPixel.color;
          firstRawData.logo = currentPixel.pixel;
          firstRawData.canvas = document.querySelector(".hour_first");
          createPixelByData(firstRawData).start();
        }
        if (currentDateArray[1] !== hourArray[1]) {
          const currentPixel = pixels.numberPixels[Number(hourArray[1])];
          currentDateArray[1] = hourArray[1];
          secondRawData.color = currentPixel.color;
          secondRawData.logo = currentPixel.pixel;
          secondRawData.canvas = document.querySelector(".hour_second");
          createPixelByData(secondRawData).start();
        }
      }
    });
  });
</script>

<div class="pixel-hour">
  <canvas class="hour_first" width="200" height="200" />
  <canvas class="hour_second" width="200" height="200" />
</div>

<style>
  .pixel-hour {
    display: flex;
    align-items: center;
    height: 200px;
  }
  .pixel-hour :first-child {
    margin-right: 20px;
  }
</style>
