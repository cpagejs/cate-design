import { SFCWithInstall } from "../utils/types";
declare const _default: SFCWithInstall<import("vue").DefineComponent<{
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "onClick"[], "onClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onOnClick?: ((...args: any[]) => any) | undefined;
}, {
    type: import("./types").ButtonType;
    disabled: boolean;
    size: import("./types").ButtonSize;
}>>;
export default _default;
