import "./index.scss";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    defaultIndex: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    onSelect: import("vue").PropType<(selectedIndex: string) => void>;
}>, () => import("react").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    defaultIndex: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    onSelect: import("vue").PropType<(selectedIndex: string) => void>;
}>> & Readonly<{}>, {
    type: "horizontal" | "vertical";
    defaultIndex: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
