<script>
  import { timeValue, colorArrayHexList } from "../store/index";
</script>

<div class="github">
  {#if $timeValue.hourDegree}
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
      class="lucide lucide-github"
      ><path
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      /><path d="M9 18c-4.51 2-5-2-7-2" /></svg
    >
    <a
      href="https://github.com/cairongquan"
      style="color:{$colorArrayHexList[$timeValue.hourDegree]}">cairongquan10</a
    >
  {/if}
</div>

<style>
  .github {
    padding: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 1px 1px 12px 0.2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .github a {
    text-decoration: none;
    user-select: none;
  }
</style>
