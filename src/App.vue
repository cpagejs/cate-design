<script setup lang="ts">
  import cTimeCircle from "../packages/components/cTimeCircle/cTimeCircle.tsx";
  // import cButton from "../packages/components/cButton/cButton.tsx";
</script>

<template>
  <div>
    <cTimeCircle :time="60" />
    <!-- <cButton text="按钮测试按钮"></cButton> -->
  </div>
</template>

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
