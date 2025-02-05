import "./index.scss";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    isShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMask: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
}>, () => import("react").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "maskClick"[], "maskClick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    isShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMask: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onMaskClick?: ((...args: any[]) => any) | undefined;
}>, {
    isShow: boolean;
    showMask: boolean;
    position: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
