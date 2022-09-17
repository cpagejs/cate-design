import "./index.scss";
declare const _default: import("vue").DefineComponent<{
    defaultIndex: {
        type: StringConstructor;
        default: string;
    };
    mode: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    onSelect: import("vue").PropType<(selectedIndex: string) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    defaultIndex: {
        type: StringConstructor;
        default: string;
    };
    mode: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    onSelect: import("vue").PropType<(selectedIndex: string) => void>;
}>>, {
    defaultIndex: string;
    mode: "horizontal" | "vertical";
}>;
export default _default;
