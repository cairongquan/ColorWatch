<script>
  import { onMount } from "svelte";
  onMount(() => {
    const dom = document.querySelector(".minute");
    let i = 6;
    // setInterval(() => {
    //   // @ts-ignore
    //   dom.style.transform = `rotateZ(${i}deg)`;
    //   i += 6;
    // }, 1000);
  });
</script>

<div class="minute">
  <div class="dot" />
  <div class="short-pencil" />
  <div class="long-pencil">
    <div class="long-pencil-child" />
  </div>
</div>

<style>
  .minute {
    position: absolute;
    left: calc(50% - 8px);
    top: calc(50% - 8px);
    /* transform: translate(-50%, -50%); */
    transition: all ease 100ms;
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
    top: 14px;
    transform: translateX(-50%);
  }
  .long-pencil {
    position: absolute;
    top: 24px;
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
