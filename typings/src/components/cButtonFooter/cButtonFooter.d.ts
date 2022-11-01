import "./index.scss";
declare const _default: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    backgroungColor: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "onClick"[], "onClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    backgroungColor: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onOnClick?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    text: string;
    textColor: string;
    backgroungColor: string;
}>;
export default _default;
