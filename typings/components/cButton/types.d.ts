import type { PropType } from "vue";
export type ButtonSize = "lg" | "sm" | "default";
export type ButtonType = "primary" | "info" | "danger" | "link";
export declare const buttonProps: () => {
    text: StringConstructor;
    backgroundColor: StringConstructor;
    textColor: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        defalut: boolean;
    };
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    href: StringConstructor;
};
