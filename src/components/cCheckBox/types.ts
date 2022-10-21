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
    default: "rgb(64, 169, 255)",
  },
  borderColor: {
    type: String,
    default: "rgb(64, 169, 255)",
  },
  onChange: Function as CustomEventFuncType<boolean>,
});

export { checkBoxProps };
