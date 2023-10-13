<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { timeValue } from "../store/index";
  let isLoading = false;
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
        container.removeChild(dom);
        clearInterval(timer);
        timer = null;
        i = 0;
        const childrenDom = container.querySelectorAll(".sun-clock-child");
        childrenDom[59].addEventListener("animationend", () => {
          Array.from(childrenDom).forEach((dom) => {
            dom.style.animation =
              "secondSunAnimationContrary ease-in-out forwards 220ms";
          });
          formatAllChildClass();
        });
        formatAllChildClass();
        isLoading = true;
        return;
      }
    }, 50);
  });

  const formatAllChildClass = () => {
    setTimeout(() => {
      const container = document.querySelector(".sun-clock");
      const childrenDom = container.querySelectorAll(".sun-clock-child");
      Array.from(childrenDom).forEach((dom, index) => {
        dom.style.animation = "secondSunAnimationForward ease-in-out forwards";
        dom.style.animationDuration = "210ms";
        dom.style.animationDelay = `${index}s`;
      });
    }, 120);
  };
</script>

<div class="sun-clock">
  <div class="sun-clock-demo">
    <div class="sun-clock-dot" />
  </div>
  <div class="time-show-sun-box" style="opacity: {isLoading ? 1 : 0}">
    <div class="hours-sun-box">
      {new Date($timeValue.timerInfo).getHours().toString().padStart(2, "0")}
    </div>
    <div class="clock-dot" />
    <div class="min-sun-box">
      {new Date($timeValue.timerInfo).getMinutes().toString().padStart(2, "0")}
    </div>
  </div>
</div>

<style>
  .sun-clock {
    width: 572px;
    height: 572px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(35px);
    z-index: 999;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    font-family: "number-font";
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
  .time-show-sun-box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-size: 140px;
    font-weight: bold;
    color: #fdfbfc;
    transition: all ease 420ms;
  }
  .clock-dot {
    position: relative;
    width: 62px;
    height: 72px;
  }
  .clock-dot:after {
    content: "";
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #fdfbfc;
    position: absolute;
    left: 50%;
    top: calc(50% - 22px);
    transform: translateX(-50%);
    animation: dotAnimation ease-in-out 1.5s infinite;
  }
  .clock-dot:before {
    content: "";
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #fdfbfc;
    position: absolute;
    left: 50%;
    top: calc(50% + 11px);
    transform: translateX(-50%);
  }
</style>
