<script>
  // @ts-nocheck
  import Element from "$lib/Element.svelte";
  import "./element.style.css";

  import Minute from "$lib/Minute.svelte";
  import Hour from "$lib/Hour.svelte";
  import Second from "$lib/Second.svelte";
  import Dot from "$lib/Dot.svelte";

  import { clockEname } from "./color.config";
  import { onMount } from "svelte";

  let positionArray = [];
  let isLoading = false;
  onMount(() => {
    let i = 0;
    const dom = document.querySelector(".round");
    const child = dom.querySelector(".round-child");
    const container = document.querySelector(".container");
    const leftNum = container.getBoundingClientRect().left;
    const topNum = container.getBoundingClientRect().top;

    dom.style.transform = `rotateZ(${360}deg)`;
    let timer = setInterval(() => {
      let childPosition = child.getBoundingClientRect();
      positionArray.push({
        left: (childPosition.left - leftNum - 14).toFixed(2),
        top: (childPosition.top - topNum - 52).toFixed(2),
        rotateZ: i,
      });
      i += 30;
      dom.style.transform = `rotateZ(${i}deg)`;
      if (i === 360) {
        clearInterval(timer);
        timer = null;
        container.removeChild(dom);
        isLoading = true;
        return;
      }
    });
  });
</script>

<div class="container">
  {#if isLoading}
    {#each positionArray as item, index}
      <Element bind:className={clockEname[index]} bind:positionObj={item} />
    {/each}
  {/if}
  <Minute />
  <Hour />
  <Second />
  <Dot />
  <div class="round">
    <div class="round-child" />
  </div>
</div>

<style>
  .container {
    box-shadow: 1px 1px 10px 0.1px rgba(0, 0, 0, 0.1);
    background-color: #fcfdfe;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 472px;
    height: 543px;
    border-radius: 102px;
    box-sizing: border-box;
    padding: 20px;
  }
  .round {
    position: absolute;
    left: calc(50% - 174px);
    top: calc(50% - 174px);
    width: 348px;
    height: 348px;
    border-radius: 50%;
    border: 1px solid #000;
  }
  .round-child {
    width: 1px;
    height: 1px;
    background-color: #000;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
