declare const _default: import("vue").DefineComponent<{
    node: {
        type: import("vue").PropType<Required<import("./types").TreeNodeOptions>>;
        required: boolean;
    };
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    onCheckChange: import("./types").CustomEventFuncType<[boolean, Required<import("./types").TreeNodeOptions>]>;
    iconSlot: import("vue").PropType<import("vue").Slot>;
    render: import("./types").renderFunc<Required<import("./types").TreeNodeOptions>>;
    onSelectChange: import("./types").CustomEventFuncType<Required<import("./types").TreeNodeOptions>>;
    onToggleExpand: import("./types").CustomEventFuncType<Required<import("./types").TreeNodeOptions>>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("toggle-expand" | "select-change" | "check-change")[], "toggle-expand" | "select-change" | "check-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    node: {
        type: import("vue").PropType<Required<import("./types").TreeNodeOptions>>;
        required: boolean;
    };
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    onCheckChange: import("./types").CustomEventFuncType<[boolean, Required<import("./types").TreeNodeOptions>]>;
    iconSlot: import("vue").PropType<import("vue").Slot>;
    render: import("./types").renderFunc<Required<import("./types").TreeNodeOptions>>;
    onSelectChange: import("./types").CustomEventFuncType<Required<import("./types").TreeNodeOptions>>;
    onToggleExpand: import("./types").CustomEventFuncType<Required<import("./types").TreeNodeOptions>>;
}>> & {
    "onToggle-expand"?: ((...args: any[]) => any) | undefined;
    "onSelect-change"?: ((...args: any[]) => any) | undefined;
    "onCheck-change"?: ((...args: any[]) => any) | undefined;
}, {
    showCheckbox: boolean;
    checkStrictly: boolean;
}>;
export default _default;
