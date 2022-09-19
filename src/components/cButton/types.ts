import { PropType } from "vue";

type ButtonSize = "lg" | "sm" | "full";

type ButtonType = "primary" | "info" | "danger" | "link";

const buttonProps = () => ({
  text: String,
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
