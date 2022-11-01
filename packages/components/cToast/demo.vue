<template>
  <cToast ref="tRef"/>
</template>

<script>
import { ref, defineComponent, onMounted } from "vue";
import cToast from "./cToast.tsx";
export default defineComponent({
  components: {
    cToast
  },
  setup() {
    const tRef = ref();
    onMounted(() => {
      console.log(tRef.value)
    });

    return { tRef };
  }
})
</script>

<style>

</style>