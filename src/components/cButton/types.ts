import { PropType } from "vue";

type ButtonSize = "lg" | "sm";

type ButtonType = "primary" | "default" | "danger" | "link";

const buttonProps = () => ({
  label: String,
  backgroundColor: String,
  textColor: String,
  disabled: {
    type: Boolean,
    defalut: false,
  },
  size: String as PropType<ButtonSize>,
  type: {
    type: String as PropType<ButtonType>,
    default: "primary",
  },
  href: String,
});
export { ButtonType, ButtonSize, buttonProps };
