<script></script>

<div class="hour">
  <div class="dot" />
  <div class="short-pencil" />
  <div class="long-pencil">
    <div class="long-pencil-child" />
  </div>
</div>

<style>
  .hour {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #ccc3bc;
  }
  .short-pencil {
    width: 6px;
    height: 14px;
    background-color: #ccc3bc;
    position: absolute;
    left: 50%;
    top: 14px;
    transform: translateX(-50%);
  }
  .long-pencil {
    position: absolute;
    top: 24px;
    width: 16px;
    height: 96px;
    border-radius: 8px;
    background-color: #ccc3bc;
    padding: 4px;
    box-sizing: border-box;
  }
  .long-pencil-child {
    background-color: #fae9de;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
</style>
