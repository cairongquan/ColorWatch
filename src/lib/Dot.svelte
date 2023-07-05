<script></script>

<div class="dot-box" />

<style>
  .dot-box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.95);
    width: 14px;
    height: 14px;
    border-radius: 7px;
  }
  .dot-box:after {
    content: "";
    width: 4px;
    height: 4px;
    background-color: #000;
    border-radius: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
