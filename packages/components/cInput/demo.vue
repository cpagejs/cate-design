<template>
  <div className="main">
    <cInput
      style="width: 200px"
      placeholder="placeholder"
      size="sm"
    />
    <cInput
      style="width: 300px"
      placeholder="disabled input"
      disabled
    />
    <cInput
      style="width: 300px"
      defaultValue="large size"
      size="lg"
    />
    <cInput
      style="width: 300px"
      placeholder="small size"
      size="sm"
    />
    <cInput
      defaultValue="prepend text"
      prepend="https://"
      v-model="inputValue"
    />
    {{ inputValue }}
    <cInput
      style="width: 300px"
      defaultValue="google"
      append=".com"
    />
  </div>
</template>

<script lang="tsx">
  import { defineComponent, ref } from "vue";
  import cInput from "./cInput";

  export default defineComponent({
    name: "App",
    components: {
      cInput,
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
