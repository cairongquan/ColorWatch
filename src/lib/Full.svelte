<script>
  // @ts-nocheck

  import { timeValue, colorArrayHexList } from "../store/index";
  import { Maximize2, Minimize2 } from "lucide-svelte";

  let isNotFull = true;

  const fullBtnClick = () => {
    isNotFull = !isNotFull;
    if (isNotFull) {
      return document.exitFullscreen();
    }
    document.documentElement.requestFullscreen();
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="full-view" on:click={fullBtnClick}>
  {#if $timeValue.hourDegree}
    {#if isNotFull}
      <Maximize2
        size={24}
        style="color:{$colorArrayHexList[$timeValue.hourDegree]}"
      />
    {:else}
      <Minimize2
        size={24}
        style="color:{$colorArrayHexList[$timeValue.hourDegree]}"
      />
    {/if}
  {/if}
</div>

<style>
  .full-view {
    cursor: pointer;
    margin-left: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 1px 1px 12px 0.2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #fff;
  }
</style>
