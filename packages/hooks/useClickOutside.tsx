import { onMounted, onUnmounted, Ref } from "vue";

export function useClickOutside(ref: Ref, handler: () => void) {
  const listener = (event: MouseEvent) => {
    if (!ref.value || ref.value.contains(event.target)) {
      return;
    }
    handler();
  };
  onMounted(() => {
    document.addEventListener("click", listener);
  });

  onUnmounted(() => {
    document.removeEventListener("click", listener);
  });
}
