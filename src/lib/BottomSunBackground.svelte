<script></script>

<div class="bottom-sun-background" />

<style>
  .bottom-sun-background {
    width: 100vw;
    height: calc(50vh - 80px);
    background: linear-gradient(#243498, #1a2672, #101d57, #0b143c);
    position: relative;
  }
  .bottom-sun-background:before {
    content: "";
    width: 0;
    height: 0;
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
    border-bottom: 80px solid #243498;
    position: absolute;
    top: -80px;
    left: 0;
  }
</style>
