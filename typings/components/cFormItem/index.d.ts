import { SFCWithInstall } from "../utils/types";
declare const _default: SFCWithInstall<import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: string;
    };
    prop: {
        type: StringConstructor;
        default: string;
    };
    rules: {
        type: import("vue").PropType<import("./types").NewStringSchema | import("./types").NewStringSchema[]>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: string;
    };
    prop: {
        type: StringConstructor;
        default: string;
    };
    rules: {
        type: import("vue").PropType<import("./types").NewStringSchema | import("./types").NewStringSchema[]>;
    };
}>>, {
    label: string;
    prop: string;
}>>;
export default _default;
