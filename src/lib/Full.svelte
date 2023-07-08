<script>
  import { timeValue, colorArrayHexList } from "../store/index";
  let isNotFull = true;

  const fullBtn = () => {
    isNotFull = !isNotFull;
    document.documentElement.requestFullscreen();
  };
  const notFullBtn = () => {
    isNotFull = !isNotFull;
    document.exitFullscreen();
  };
</script>

<div class="full-view">
  {#if $timeValue.hourDegree}
    {#if isNotFull}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div on:click={fullBtn}>
        <svg
          style="color:{$colorArrayHexList[$timeValue.hourDegree]}"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-maximize-2"
          ><polyline points="15 3 21 3 21 9" /><polyline
            points="9 21 3 21 3 15"
          /><line x1="21" x2="14" y1="3" y2="10" /><line
            x1="3"
            x2="10"
            y1="21"
            y2="14"
          /></svg
        >
      </div>
    {/if}
  {:else if $timeValue.hourDegree}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click={notFullBtn}>
      <svg
        style="color:{$colorArrayHexList[$timeValue.hourDegree]}"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-minimize-2"
        ><polyline points="4 14 10 14 10 20" /><polyline
          points="20 10 14 10 14 4"
        /><line x1="14" x2="21" y1="10" y2="3" /><line
          x1="3"
          x2="10"
          y1="21"
          y2="14"
        /></svg
      >
    </div>
  {/if}
</div>

<style>
  .full-view {
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    left: 20px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 1px 1px 12px 0.2px rgba(0, 0, 0, 0.1);
  }
</style>
