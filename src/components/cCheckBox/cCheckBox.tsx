import { defineComponent, computed } from "vue";
import "./index.scss";
import { checkBoxProps } from "./types";

const props = checkBoxProps();
export default defineComponent({
  name: "cCheckbox",
  props: props,
  emits: ["update:modelValue", "onChange"],
  setup(props, { emit, slots }) {
    const rootCls = computed(() => {
      let result = "c-checkbox";
      if (props.modelValue) {
        result += " checked";
      } else if (props.halfChecked) {
        result += " half-checked";
      }
      if (props.disabled) {
        result += " disabled";
      }
      return result;
    });
    const handleClick = (event: MouseEvent) => {
      event.stopPropagation();
      if (!props.disabled) {
        emit("update:modelValue", !props.modelValue);
        emit("onChange", !props.modelValue);
      }
    };
    return () => {
      return (
        <div class={rootCls.value} onClick={handleClick}>
          <div class="inner" />
          <div class="content">{slots.default && slots.default()}</div>
        </div>
      );
    };
  },
});
