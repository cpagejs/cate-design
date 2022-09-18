import { SFCWithInstall } from "../utils/types";
declare const _default: SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    halfChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
    onChange: import("../cTree/types").CustomEventFuncType<boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "onChange")[], "onChange" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    halfChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
    onChange: import("../cTree/types").CustomEventFuncType<boolean>;
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onOnChange?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: boolean;
    halfChecked: boolean;
}>>;
export default _default;
