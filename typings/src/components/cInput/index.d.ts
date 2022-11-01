import { SFCWithInstall } from "../utils/types";
declare const _default: SFCWithInstall<import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    size: {
        type: import("vue").PropType<"lg" | "sm">;
        default: string;
    };
    prepend: StringConstructor;
    append: StringConstructor;
    style: ObjectConstructor;
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    onChange: {
        type: import("vue").PropType<(value: string) => void>;
    };
    onKeydown: {
        type: import("vue").PropType<(e: KeyboardEvent) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "keydown")[], "update:modelValue" | "change" | "keydown", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: BooleanConstructor;
    size: {
        type: import("vue").PropType<"lg" | "sm">;
        default: string;
    };
    prepend: StringConstructor;
    append: StringConstructor;
    style: ObjectConstructor;
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    onChange: {
        type: import("vue").PropType<(value: string) => void>;
    };
    onKeydown: {
        type: import("vue").PropType<(e: KeyboardEvent) => void>;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onKeydown?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    size: "lg" | "sm";
    modelValue: string;
}>>;
export default _default;
