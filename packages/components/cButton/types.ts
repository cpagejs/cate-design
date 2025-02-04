import type { PropType } from "vue";

export type ButtonSize = "lg" | "sm" | "default";

export type ButtonType = "primary" | "info" | "danger" | "link";

export const buttonProps = () => ({
  text: String,
  backgroundColor: String,
  textColor: String,
  disabled: {
    type: Boolean,
    defalut: false,
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: "default",
  },
  type: {
    type: String as PropType<ButtonType>,
    default: "primary",
  },
  href: String,
});
// export { ButtonType, ButtonSize, buttonProps };
