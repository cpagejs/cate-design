<template>
  <div className="demo-box">
    <div
      className="form-item"
      style="width: 206px"
    >
      value: {{ value }}
      <c-checkbox v-model="value" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import cCheckbox from "./index";
  export default defineComponent({
    name: "CheckboxDemo",
    components: { cCheckbox },
    setup(props, context) {
      const value = ref(false);
      return {
        value,
      };
    },
  });
</script>
