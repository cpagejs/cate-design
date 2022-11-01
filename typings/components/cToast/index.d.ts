import { SFCWithInstall } from "../utils/types";
interface IToastConfig {
    msg: string;
    delay?: number;
    showMask?: boolean;
    onEnd?: () => void;
}
export declare function useToast({ msg, delay, showMask, onEnd }: IToastConfig): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
declare const _default: SFCWithInstall<import("vue").DefineComponent<{
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
}>>;
export default _default;
