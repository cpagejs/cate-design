<template>
  <div>
    <cTimeCircle :time="60" />
    <cButton text="按钮测试按钮"></cButton>
  </div>
</template>
<script setup lang="ts">
  import "cate-design/dist/index.css";
  import { cButton, cTimeCircle } from "cate-design";
</script>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
