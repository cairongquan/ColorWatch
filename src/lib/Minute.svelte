<script>
  import { onMount } from "svelte";

  import { targetHexArray } from "../color.config";
  import {
    lightenHexColor,
    darkenHexColor,
    smoothColorTransition,
    generateColorTransition,
  } from "../util";

  /**
   * @type {string[][]}
   */
  let generColorMapper = [];
  /**
   * @type {string}
   */
  let backgroundColor = "";
  let longBackgroundColor = "";

  targetHexArray.forEach((item, index) => {
    const color = lightenHexColor(`#${item}`, 0.2);
    const nextColor = lightenHexColor(
      `#${targetHexArray[index === 11 ? 0 : index + 1]}`,
      0.2
    );
    // @ts-ignore
    generColorMapper.push(...generateColorTransition(color, nextColor, 30));
  });

  onMount(() => {
    const dom = document.querySelector(".minute");
    let i = 0;
    // @ts-ignore
    setInterval(() => {
      i++;
      if (i === 360) {
        i = 0;
      }
      // @ts-ignore
      backgroundColor = generColorMapper[i];
      longBackgroundColor = lightenHexColor(backgroundColor, 0.1);

      // @ts-ignore
      dom.style.transform = `rotateZ(${i}deg)`;
    }, 1000);
  });
</script>

<div class="minute">
  <div class="dot" />
  <div class="short-pencil" style="background-color:{backgroundColor};" />
  <div class="long-pencil" style="background-color:{backgroundColor};">
    <div
      class="long-pencil-child"
      style="background-color: {longBackgroundColor};"
    />
  </div>
</div>

<style>
  .minute {
    position: absolute;
    left: calc(50% - 8px);
    top: calc(50% - 8px);
    transition: all ease 220ms;
  }
  .dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #1e6196;
  }
  .short-pencil {
    width: 6px;
    height: 14px;
    background-color: #1e6196;
    position: absolute;
    left: 50%;
    bottom: 14px;
    transform: translateX(-50%);
  }
  .long-pencil {
    position: absolute;
    bottom: 24px;
    width: 16px;
    height: 186px;
    border-radius: 8px;
    background-color: #1e6196;
    padding: 4px;
    box-sizing: border-box;
  }
  .long-pencil-child {
    background-color: #148cf1;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
</style>
