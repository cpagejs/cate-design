<template>
  <div class="main">
    <cButtonDemo />
    <cInputDemo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import cButtonDemo from "./components/cButton/demo.vue";
import cInputDemo from "./components/cInput/demo.vue";
export default defineComponent({
  name: "App",
  components: {
    cButtonDemo,
    cInputDemo
  },
});
</script>

<style lang="scss"></style>
