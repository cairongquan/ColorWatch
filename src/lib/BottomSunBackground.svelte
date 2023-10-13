<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import {
    baseRenderSunColorBottomHexArray,
    baseRenderSunColorMiddleHexArray,
  } from "../store";

  export let i = 0;

  onMount(() => {
    const canvas = document.querySelector(".bottom-sun-background__bottom");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = 120;

    context.beginPath();
    context.moveTo(canvas.width / 2, 0); // 移动到顶点
    context.lineTo(0, 120); // 绘制到底左边角
    context.lineTo(canvas.width, 120); // 绘制到底右边角
    context.closePath(); // 封闭路径
  });

  $: {
    const canvas = document.querySelector(".bottom-sun-background__bottom");
    if (canvas) {
      const context = canvas.getContext("2d");
      const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
      const currentColorArray = $baseRenderSunColorMiddleHexArray[i];
      for (let o = 0; o < currentColorArray.length; o++) {
        gradient.addColorStop(
          o / (currentColorArray.length - 1),
          currentColorArray[o]
        );
      }
      context.fillStyle = gradient;
      context.fill();
    }
  }
</script>

<div
  class="bottom-sun-background"
  style="background:linear-gradient({$baseRenderSunColorBottomHexArray[i]})"
>
  <canvas class="bottom-sun-background__bottom" />
</div>

<style>
  .bottom-sun-background {
    width: 100vw;
    height: calc(50vh - 120px);
    position: relative;
  }
  .bottom-sun-background__bottom {
    position: absolute;
    top: -120px;
    left: 0;
  }
</style>
