<script>
  import PixelHour from "$lib/pixelHour.svelte";
  import PixelMinute from "$lib/pixelMinute.svelte";
</script>

<div id="PixelWatchContainer">
  <div class="pixel_content">
    <div class="pixel_content_one">
      <PixelHour />
    </div>
    <div class="pixel_content_second">
      <PixelMinute />
    </div>
  </div>
</div>

<style>
  #PixelWatchContainer {
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
  .pixel_content {
    min-width: 400px;
    border-radius: 6px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }
  .pixel_content_one {
    margin-right: 20px;
  }
  .pixel_content_second {
    margin-left: 20px;
  }
</style>
