<script>
  import { onMount, afterUpdate } from "svelte";
  export let className = "";
  export let positionObj = {
    top: 0,
    left: 0,
    rotateZ: 0,
  };

  let styleString = "";
  onMount(() => {
    // @ts-ignore
    let timer = setTimeout(() => {
      styleString = `top:${positionObj.top}px;left:${positionObj.left}px;transform:rotateZ(${positionObj.rotateZ}deg);opacity: 1;height:104px`;
      clearTimeout(timer);
      // @ts-ignore
      timer = null;
    }, 10);
  });
</script>

<div class="element {className}" style={styleString} />

<style>
  .element {
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 14px;
    transition: all ease 1200ms;
    transform-origin: center;
    left: calc(50% - 14px);
    top: calc(50% - 41px);
    opacity: 0;
  }
</style>
