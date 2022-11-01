<template>
  <div class="main">
    <c-bar percent="30" />
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref } from "vue";
import cBar from "./cBar";

export default defineComponent({
  name: "App",
  components: {
    cBar,
  },
  setup() {
    const text = ref("btn 按钮");
    const btnClick = () => {
      alert("click btn~");
    };
    return {
      text,
      btnClick,
    };
  },
});
</script>
<style lang="scss"></style>
