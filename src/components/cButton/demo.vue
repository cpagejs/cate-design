<template>
  <div class="main">
    <c-button :label="text" type="primary" size="lg"/>
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref } from "vue";
import cButton from "./cButton";

export default defineComponent({
  name: "App",
  components: {
    cButton,
  },
  setup() {
    const text = ref("btn 按钮");

    return {
      text
    };
  },
});
</script>
<style lang="scss"></style>
