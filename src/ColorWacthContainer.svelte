<script>
  // @ts-nocheck
  import Element from "$lib/Element.svelte";
  import "./style/element.style.css";

  import Minute from "$lib/Minute.svelte";
  import Hour from "$lib/Hour.svelte";
  import Second from "$lib/Second.svelte";
  import Dot from "$lib/Dot.svelte";
  import Time from "$lib/Time.svelte";

  import { onMount } from "svelte";

  let positionArray = [];
  let isLoading = true;

  const clockEname = [
    "twelve",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
  ];

  onMount(async () => {
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
        isLoading = false;
        return;
      }
    });
  });
</script>

<div class="container">
  {#if !isLoading}
    {#each positionArray as item, index}
      <Element bind:className={clockEname[index]} bind:positionObj={item} />
    {/each}
  {/if}
  <div class="click-view">
    <Minute />
    <Hour />
    <Second />
    <Dot />
  </div>
  <div class="time-view">
    <Time />
  </div>
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
  .click-view {
    animation: showClick 260ms forwards;
    animation-delay: 1440ms;
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
  }
  .time-view {
    position: absolute;
    left: 50%;
    top: 184px;
    transform: translateX(-50%);
    z-index: -99;
    animation-delay: 1460ms;
    animation: showTime 1220ms forwards;
  }
  @keyframes showClick {
    0% {
      opacity: 0;
      transform: scale(0.1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes showTime {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
