<template>
  <div class="main">
    <c-button-footer
      :text="text"
      type="primary"
      size="lg"
      @on-click="btnClick"
    />
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref } from "vue";
import cButtonFooter from "./cButtonFooter";

export default defineComponent({
  name: "App",
  components: {
    cButtonFooter,
  },
  setup() {
    const text = ref("btn footer 按钮");
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
