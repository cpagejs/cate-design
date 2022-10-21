import "./index.scss";
declare const _default: import("vue").DefineComponent<{
    text: StringConstructor;
    backgroundColor: StringConstructor;
    textColor: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        defalut: boolean;
    };
    size: import("vue").PropType<import("./types").ButtonSize>;
    type: {
        type: import("vue").PropType<import("./types").ButtonType>;
        default: string;
    };
    href: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "onClick"[], "onClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: StringConstructor;
    backgroundColor: StringConstructor;
    textColor: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        defalut: boolean;
    };
    size: import("vue").PropType<import("./types").ButtonSize>;
    type: {
        type: import("vue").PropType<import("./types").ButtonType>;
        default: string;
    };
    href: StringConstructor;
}>> & {
    onOnClick?: ((...args: any[]) => any) | undefined;
}, {
    type: import("./types").ButtonType;
    disabled: boolean;
}>;
export default _default;
