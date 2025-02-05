<template>
  <div className="main">
    <cInputPassword value="inputValue" />
  </div>
</template>

<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import cInputPassword from "./cInputPassword.vue";

  export default defineComponent({
    name: "App",
    components: {
      cInputPassword,
    },
    setup() {
      const inputValue = ref("info");

      return {
        inputValue,
      };
    },
  });
</script>
<style lang="scss"></style>
