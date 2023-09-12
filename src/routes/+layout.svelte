<script>
  import "./styles.css";

  import ColorWacthContainer from "../ColorWacthContainer.svelte";
  import SunWacthContainer from "../SunWacthContainer.svelte";

  import GitHub from "$lib/GitHub.svelte";
  import ChangeMode from "$lib/changeMode.svelte";
  import Full from "$lib/Full.svelte";

  export const ssr = false;
</script>

<div class="app">
  <!-- <ColorWacthContainer /> -->
  <SunWacthContainer />
  <div class="bottom">
    <GitHub />
    <ChangeMode />
    <Full />
  </div>
  <!-- <Full /> -->
</div>

<style>
  .app {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
  }
  .bottom {
    position: absolute;
    right: 20px;
    bottom: 20px;
    display: flex;
    align-items: center;
  }
</style>
