<script>
  // @ts-nocheck

  import { ArrowRightLeft } from "lucide-svelte";

  import { colorArrayHexList, timeValue } from "../store/index";

  export let click = null;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="change-watch" on:click={click}>
  <ArrowRightLeft
    size={24}
    style="color:{$colorArrayHexList[$timeValue.hourDegree]}"
  />
</div>

<style>
  .change-watch {
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
