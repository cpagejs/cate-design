<template>
  <div className="main">
    <c-button
      :text="text"
      type="primary"
      size="lg"
      @on-click="btnClick"
    />
    <c-button
      text="btn text"
      type="danger"
      text-color="#fff"
      @on-click="btnClick"
    />
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
