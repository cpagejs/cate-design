import { PropType } from "vue";
declare type ButtonSize = "lg" | "sm" | "full";
declare type ButtonType = "primary" | "info" | "danger" | "link";
declare const buttonProps: () => {
    text: StringConstructor;
    backgroundColor: StringConstructor;
    textColor: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        defalut: boolean;
    };
    size: PropType<ButtonSize>;
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    href: StringConstructor;
};
export { ButtonType, ButtonSize, buttonProps };
