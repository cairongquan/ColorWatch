<script>
  // @ts-nocheck
  import { onMount } from "svelte";

  import "./styles.css";

  import ColorWacthContainer from "../ColorWacthContainer.svelte";
  import SunWacthContainer from "../SunWacthContainer.svelte";

  import GitHub from "$lib/GitHub.svelte";
  import ChangeMode from "$lib/changeMode.svelte";
  import Full from "$lib/Full.svelte";

  import MyWorker from "$lib/startTime?worker";
  import {
    timeValue,
    colorArrayHexList,
    userLocalInfo,
    sunColorHexArray,
    baseRenderSunColorHexArray,
    baseRenderSunColorBottomHexArray,
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
</script>

<div class="app">
  <!-- <ColorWacthContainer /> -->
  <SunWacthContainer />
  <div class="bottom">
    <GitHub />
    <ChangeMode />
    <Full />
  </div>
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
