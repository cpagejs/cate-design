import "./index.scss";
declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    styleLoading: {
        type: ObjectConstructor;
        default(): {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "onBgClick"[], "onBgClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    styleLoading: {
        type: ObjectConstructor;
        default(): {};
    };
}>> & {
    onOnBgClick?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    styleLoading: Record<string, any>;
}>;
export default _default;
