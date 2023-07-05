<script>
  //   import { onMount } from "svelte";
</script>

<div class="second-box">
  <div class="second" />
  <div class="second-tail" />
</div>

<style>
  .second-box {
    position: absolute;
    left: calc(50% - 3px);
    top: 50%;
    animation: move 60s infinite linear;
    transform-origin: top;
  }
  .second-box:after {
    content: "";
    position: absolute;
    left: 0;
    top: -40px;
    background-color: transparent;
    width: 6px;
    height: 246px;
    border-radius: 3px;
    box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.1);
  }
  .second {
    width: 6px;
    height: 206px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    backdrop-filter: blur(20px);
    background: rgba(251, 251, 253, 0.8);
  }
  .second-tail {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: absolute;
    top: -44px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 44px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background: rgba(251, 251, 253, 0.8);
    backdrop-filter: blur(20px);
  }
  @keyframes move {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
</style>
