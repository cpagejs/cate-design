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
  onChange: Function as CustomEventFuncType<boolean>,
});

export { checkBoxProps };
