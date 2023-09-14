<script>
  import { onMount } from "svelte";

  import "./styles.css";

  import ColorWacthContainer from "../ColorWacthContainer.svelte";
  import SunWacthContainer from "../SunWacthContainer.svelte";

  import GitHub from "$lib/GitHub.svelte";
  import ChangeMode from "$lib/changeMode.svelte";
  import Full from "$lib/Full.svelte";

  import MyWorker from "$lib/startTime?worker";
  import { timeValue, colorArrayHexList } from "../store/index";

  export const ssr = false;

  onMount(() => {
    const worker = new MyWorker();
    worker.postMessage({ message: "run" });
    worker.onmessage = function (event) {
      const workerMessage = event.data;
      if (workerMessage.length) {
        return colorArrayHexList.update(() => workerMessage);
      }
      timeValue.update(() => {
        return workerMessage;
      });
    };
  });
</script>

<div class="app">
  <!-- <ColorWacthContainer /> -->
  <SunWacthContainer />
  <!-- <div class="bottom">
    <GitHub />
    <ChangeMode />
    <Full />
  </div> -->
  <!-- <Full /> -->
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
