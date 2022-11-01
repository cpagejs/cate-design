import { CustomEventFuncType } from "../cTree/types";

const checkBoxProps = () => ({
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  halfChecked: {
    type: Boolean,
    default: false,
  },
  bgColor: {
    type: String,
    default: "#fff",
  },
  borderColor: {
    type: String,
    default: "#fff",
  },
  round: {
    // 是否是圆角
    type: Boolean,
    default: false,
  },
  onChange: Function as CustomEventFuncType<boolean>,
});

export { checkBoxProps };
