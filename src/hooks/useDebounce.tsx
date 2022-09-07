import { ref, watch } from "vue";

export function useDebounce(value: any, delay = 400) {
  const debounceValue = ref(value);

  watch(
    () => debounceValue.value,
    (newValue) => {
      let handler: any = null;
      return function () {
        if (handler) {
          clearTimeout(handler);
        }

        handler = window.setTimeout(() => {
          console.log("过了delay 执行请求");
          debounceValue.value = newValue;
          handler = null;
        }, delay);
      };
    },
    { immediate: true }
  );

  return debounceValue.value;
}
