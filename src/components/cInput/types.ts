import { PropType } from "vue";

type InputSize = "lg" | "sm";

const inputProps = () => ({
  disabled: Boolean,
  size: {
    type: String as PropType<InputSize>,
    default: "sm",
  },
  prepend: String,
  append: String,
  style: Object,
  modelValue: {
    type: String || Object,
    default: "",
  },
  onChange: {
    type: Function as PropType<(value: string) => void>,
  },
  onKeydown: {
    type: Function as PropType<(e: KeyboardEvent) => void>,
  },
});

export { inputProps };
