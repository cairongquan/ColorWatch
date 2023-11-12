<script>
  import { onMount } from "svelte";

  import { lightenHexColor } from "../util";

  import { timeValue, colorArrayHexList } from "../store/index";

  /**
   * @type {string}
   */
  let backgroundColor = "";
  let longBackgroundColor = "";

  onMount(() => {
    timeValue.subscribe(({ minuteDegree }) => {
      const dom = document.querySelector(".minute");
      if (minuteDegree === undefined || !$colorArrayHexList.length || !dom)
        return;
      // @ts-ignore
      dom.style.transform = `rotateZ(${minuteDegree}deg)`;
      // @ts-ignore
      backgroundColor = $colorArrayHexList[minuteDegree];
      longBackgroundColor = lightenHexColor(backgroundColor, 0.2);
    });
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
    transition: all ease 180ms;
  }
  .minute:after {
    content: "";
    position: absolute;
    bottom: 24px;
    border-radius: 8px;
    width: 16px;
    height: 186px;
    background-color: transparent;
    box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.1);
  }
  .dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #fff;
  }
  .short-pencil {
    width: 6px;
    height: 14px;
    background-color: #fff;
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
    background-color: #fff;
    padding: 4px;
    box-sizing: border-box;
  }
  .long-pencil-child {
    background-color: #fff;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
</style>
