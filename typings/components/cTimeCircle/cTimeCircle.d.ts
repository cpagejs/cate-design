import "./index.scss";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    timer: {
        type: NumberConstructor;
        default: number;
    };
    showNum: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, () => import("react").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "onEnd"[], "onEnd", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    timer: {
        type: NumberConstructor;
        default: number;
    };
    showNum: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onOnEnd?: ((...args: any[]) => any) | undefined;
}>, {
    timer: number;
    showNum: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
