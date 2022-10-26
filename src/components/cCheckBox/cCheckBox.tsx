import { defineComponent, computed, ref } from "vue";
import "./index.scss";
import { checkBoxProps } from "./types";

const props = checkBoxProps();
export default defineComponent({
  name: "cCheckBox",
  props: props,
  emits: ["update:modelValue", "onChange"],
  setup(props, { emit, slots }) {
    const isCheck = ref(props.modelValue);

    const rootCls = computed(() => {
      let result = "c-checkbox";
      if (props.disabled) {
        result += " disabled";
      }
      if (isCheck.value) {
        result += " checked";
      }
      // else if (props.halfChecked) {
      //   result += " half-checked";
      // }
      return result;
    });
    const handleClick = (e: MouseEvent) => {
      e.stopPropagation();
      if (!props.disabled) {
        isCheck.value = !isCheck.value;
        emit("update:modelValue", isCheck.value);
        emit("onChange", isCheck.value);
      }
    };

    const innerStyle = computed(() => ({
      backgroundColor: props.bgColor,
      borderColor: props.borderColor,
      borderRadius: props.round ? "50%" : "2px",
    }));

    return () => {
      return (
        <div class={rootCls.value} onClick={handleClick}>
          <div class="inner" style={innerStyle.value} />
          <div class="content">{slots.default?.()}</div>
        </div>
      );
    };
  },
});
