<template>
  <div class="main">
    <cButtonDemo />
    <cInputDemo />
    <cBarDemo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import cButtonDemo from "./components/cButton/demo.vue";
import cInputDemo from "./components/cInput/demo.vue";
import cBarDemo from "./components/cBar/demo.vue";

export default defineComponent({
  name: "App",
  components: {
    cButtonDemo,
    cInputDemo,
    cBarDemo,
  },
});
</script>

<style lang="scss">
.main {
  padding: 10px;
}
</style>
