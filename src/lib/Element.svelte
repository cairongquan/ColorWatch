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
    // console.log(positionObj);
    // @ts-ignore
    setTimeout(() => {
      styleString = `top:${positionObj.top}px;left:${positionObj.left}px;transform:rotateZ(${positionObj.rotateZ}deg);opacity: 1;height:84px`;
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
    transition: all ease 1220ms;
    transform-origin: center;
    left: calc(50% - 14px);
    top: calc(50% - 41px);
    opacity: 0;
  }
</style>
