import { SFCWithInstall } from "../utils/types";
declare const _default: SFCWithInstall<import("vue").DefineComponent<{
    timer: {
        type: NumberConstructor;
        default: number;
    };
    showNum: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "onEnd"[], "onEnd", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    timer: {
        type: NumberConstructor;
        default: number;
    };
    showNum: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onOnEnd?: ((...args: any[]) => any) | undefined;
}, {
    timer: number;
    showNum: boolean;
}>>;
export default _default;
