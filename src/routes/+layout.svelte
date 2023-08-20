<script>
  import "./styles.css";
  import Container from "../Container.svelte";
  import GitHub from "$lib/GitHub.svelte";
  import ChangeMode from "$lib/changeMode.svelte";
  // import Full from "$lib/Full.svelte";

  export const ssr = false;
</script>

<div class="app">
  <Container />
  <div class="bottom">
    <GitHub />
    <ChangeMode />
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
