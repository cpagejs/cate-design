import "./index.scss";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onClick" | "update:modelValue")[], "onClick" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onOnClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
}>;
export default _default;
