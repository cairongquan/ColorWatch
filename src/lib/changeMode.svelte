<script>
  import { Moon, Sun } from "lucide-svelte";
  import { timeValue, colorArrayHexList, themeMode } from "../store/index";

  import { changeTheme } from "./changeTheme";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="mode-change-btn" on:click={changeTheme}>
  {#if $timeValue.hourDegree}
    <div>
      {#if $themeMode === "light"}
        <Moon color={$colorArrayHexList[$timeValue.hourDegree]} />
      {:else}
        <Sun color={$colorArrayHexList[$timeValue.hourDegree]} />
      {/if}
    </div>
  {/if}
</div>

<style>
  .mode-change-btn {
    cursor: pointer;
    margin-left: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 1px 1px 12px 0.2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
</style>
