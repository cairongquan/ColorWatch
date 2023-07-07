<script>
  import "./styles.css";
  import Container from "../Container.svelte";
  export const ssr = false;
</script>

<div class="app">
  <Container />
</div>

<style>
  .app {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
  }
</style>
