import { SFCWithInstall } from "../utils/types";
declare const _default: SFCWithInstall<import("vue").DefineComponent<{
    defaultIndex: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    onSelect: import("vue").PropType<(selectedIndex: string) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    defaultIndex: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    onSelect: import("vue").PropType<(selectedIndex: string) => void>;
}>>, {
    type: "horizontal" | "vertical";
    defaultIndex: string;
}>>;
export default _default;
