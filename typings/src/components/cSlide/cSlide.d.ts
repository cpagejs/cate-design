import "./index.scss";
declare const _default: import("vue").DefineComponent<{
    isShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMask: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "bgClick"[], "bgClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMask: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onBgClick?: ((...args: any[]) => any) | undefined;
}, {
    isShow: boolean;
    showMask: boolean;
}>;
export default _default;
