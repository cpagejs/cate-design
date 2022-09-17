import { SFCWithInstall } from "../utils/types";
declare const _default: SFCWithInstall<import("vue").DefineComponent<{
    avatar: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    rightText: {
        type: StringConstructor;
        default: string;
    };
    rightArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "onClick"[], "onClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    avatar: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    rightText: {
        type: StringConstructor;
        default: string;
    };
    rightArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onOnClick?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    avatar: string;
    description: string;
    rightText: string;
    rightArrow: boolean;
}>>;
export default _default;
