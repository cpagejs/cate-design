import "./index.scss";
declare const _default: import("vue").DefineComponent<{
    msg: {
        type: StringConstructor;
        default: string;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    onEnd: {
        type: FunctionConstructor;
        default: () => void;
    };
    showMask: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    msg: {
        type: StringConstructor;
        default: string;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    onEnd: {
        type: FunctionConstructor;
        default: () => void;
    };
    showMask: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    showMask: boolean;
    onEnd: Function;
    msg: string;
    delay: number;
}>;
export default _default;
