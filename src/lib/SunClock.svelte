<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  onMount(() => {
    let i = 0;
    const container = document.querySelector(".sun-clock");
    const dotDom = document.querySelector(".sun-clock-dot");
    const dom = document.querySelector(".sun-clock-demo");
    const mainDom = document.querySelector(".sun-clock");

    const leftNum = container.getBoundingClientRect().left;
    const topNum = container.getBoundingClientRect().top;

    dom.style.transform = `rotateZ(${360}deg)`;
    let timer = setInterval(() => {
      let childPosition = dotDom.getBoundingClientRect();
      const currentPosition = {
        left: (childPosition.left - leftNum - 4).toFixed(2),
        top: (childPosition.top - topNum + 4).toFixed(2),
      };
      const clockElement = document.createElement("div");
      clockElement.style.position = "absolute";
      clockElement.style.left = currentPosition.left + "px";
      clockElement.style.top = currentPosition.top + "px";
      clockElement.style.transform = `rotateZ(${i}deg)`;
      clockElement.className = "sun-clock-child";
      mainDom.appendChild(clockElement);
      i += 6;
      dom.style.transform = `rotateZ(${i}deg)`;
      if (i === 360) {
        console.log("done");
        container.removeChild(dom);
        clearInterval(timer);
        timer = null;
        return;
      }
    }, 50);
  });
</script>

<div class="sun-clock">
  <div class="sun-clock-demo">
    <div class="sun-clock-dot" />
  </div>
</div>

<style>
  .sun-clock {
    width: 572px;
    height: 572px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    z-index: 999;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  .sun-clock-demo {
    position: absolute;
    left: calc(50% - 270px);
    top: calc(50% - 269px);
    width: 540px;
    height: 540px;
    background-color: transparent;
    border-radius: 50%;
  }
  .sun-clock-dot {
    width: 4px;
    height: 4px;
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
