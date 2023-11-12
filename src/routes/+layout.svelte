<script>
  // @ts-nocheck
  import { onMount } from "svelte";

  import "./styles.css";

  import ColorWacthContainer from "../ColorWacthContainer.svelte";
  import SunWacthContainer from "../SunWacthContainer.svelte";
  import PixelWatchContainer from "../PixelWatchContainer.svelte";

  import GitHub from "$lib/GitHub.svelte";
  import ChangeMode from "$lib/changeMode.svelte";
  import Full from "$lib/Full.svelte";
  import ChangeWatch from "$lib/changeWatch.svelte";

  import MyWorker from "../util/startTime?worker";
  import {
    timeValue,
    colorArrayHexList,
    userLocalInfo,
    sunColorHexArray,
    baseRenderSunColorHexArray,
    baseRenderSunColorBottomHexArray,
    baseRenderSunColorMiddleHexArray,
  } from "../store/index";

  export const ssr = false;

  onMount(() => {
    const worker = new MyWorker();
    worker.postMessage({ message: "run" });
    worker.onmessage = function (event) {
      const workerMessage = event.data;
      if (Object.hasOwn(workerMessage, "generColorMapper")) {
        colorArrayHexList.update(() => workerMessage.generColorMapper);
        sunColorHexArray.update(() => workerMessage.sunColorMapper);
        baseRenderSunColorBottomHexArray.update(
          () => workerMessage.renderSunColorMapperBottom
        );
        baseRenderSunColorHexArray.update(
          () => workerMessage.renderSunColorMapper
        );
        baseRenderSunColorMiddleHexArray.update(
          () => workerMessage.renderSunColorMapperMiddle
        );
      } else {
        timeValue.update(() => {
          return workerMessage;
        });
      }
    };

    const isSupportGeolLoc = navigator.geolocation ? true : false;
    if (isSupportGeolLoc && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          userLocalInfo.update(() => {
            console.log({
              longitude: res.coords.longitude,
              latitude: res.coords.latitude,
            });
            return {
              longitude: res.coords.longitude,
              latitude: res.coords.latitude,
            };
          });
        },
        (err) => {
          console.log(err);
        },
        {
          maximumAge: 6000,
          timeout: 15000,
          enableHighAccuracy: true,
        }
      );
    }
  });

  let themeIndex = 0;
  function changeWatch() {
    themeIndex = Number(!themeIndex);
  }
</script>

<div class="app">
  <!-- {#if themeIndex === 0}
    <ColorWacthContainer />
  {/if}
  {#if themeIndex === 1}
    <SunWacthContainer />
  {/if} -->
  <PixelWatchContainer />
  <!-- <div class="bottom">
    <GitHub />
    <ChangeMode />
    <Full />
    <ChangeWatch click={changeWatch} />
  </div> -->
</div>

<style>
  .app {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
  }
  .bottom {
    position: absolute;
    right: 20px;
    bottom: 20px;
    display: flex;
    align-items: center;
  }
</style>
