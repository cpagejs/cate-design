import "./index.scss";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    text: StringConstructor;
    backgroundColor: StringConstructor;
    textColor: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        defalut: boolean;
    };
    size: {
        type: import("vue").PropType<import("./types").ButtonSize>;
        default: string;
    };
    type: {
        type: import("vue").PropType<import("./types").ButtonType>;
        default: string;
    };
    href: StringConstructor;
}>, () => import("react").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "onClick"[], "onClick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    text: StringConstructor;
    backgroundColor: StringConstructor;
    textColor: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        defalut: boolean;
    };
    size: {
        type: import("vue").PropType<import("./types").ButtonSize>;
        default: string;
    };
    type: {
        type: import("vue").PropType<import("./types").ButtonType>;
        default: string;
    };
    href: StringConstructor;
}>> & Readonly<{
    onOnClick?: ((...args: any[]) => any) | undefined;
}>, {
    type: import("./types").ButtonType;
    size: import("./types").ButtonSize;
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
