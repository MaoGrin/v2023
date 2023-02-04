<template>
  <div id="not-found" >
    <div class="not-found" data-content="你正在迷失方向">
      你正在迷失方向
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
#not-found{
  background-color: #1f2125;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
.not-found{
  font-weight: bold;
  width: max-content;
  color: #7a828a;
  position: relative;
  text-transform: uppercase;
  font-size: 100px;
  &::after{
    content:attr(data-content);
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      to right,
      rgb(236,72,153),
      rgb(239,68,68),
      rgb(234,179,8)
    );
    background-clip: text;
    color: transparent;
    clip-path: ellipse(100px 100px at 0% 50%);
    animation: hd 3s ease-in infinite;
    text-transform: uppercase;
  }
}
@keyframes hd {
  50%{
    clip-path: ellipse(100px 100px at 100% 50%);
  }
  to{
    clip-path: ellipse(100px 100px at 0 50%);
  }
}
</style>
