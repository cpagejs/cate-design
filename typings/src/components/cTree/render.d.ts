declare const _default: import("vue").DefineComponent<{
    node: {
        type: import("vue").PropType<Required<import("./types").TreeNodeOptions>>;
        required: boolean;
    };
    render: {
        type: import("./types").renderFunc<Required<import("./types").TreeNodeOptions>>;
        required: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    node: {
        type: import("vue").PropType<Required<import("./types").TreeNodeOptions>>;
        required: boolean;
    };
    render: {
        type: import("./types").renderFunc<Required<import("./types").TreeNodeOptions>>;
        required: boolean;
    };
}>>, {}>;
export default _default;
