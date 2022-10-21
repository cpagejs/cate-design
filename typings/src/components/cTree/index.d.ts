import { SFCWithInstall } from "../utils/types";
declare const _default: SFCWithInstall<import("vue").DefineComponent<{
    source: {
        type: import("vue").PropType<import("./types").TreeNodeOptions[]>;
        default: () => never[];
    };
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    render: import("./types").renderFunc<Required<import("./types").TreeNodeOptions>>;
    lazyLoad: import("vue").PropType<(node: Required<import("./types").TreeNodeOptions>, callback: (children: import("./types").TreeNodeOptions[]) => void) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select-change" | "check-change")[], "select-change" | "check-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    source: {
        type: import("vue").PropType<import("./types").TreeNodeOptions[]>;
        default: () => never[];
    };
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    render: import("./types").renderFunc<Required<import("./types").TreeNodeOptions>>;
    lazyLoad: import("vue").PropType<(node: Required<import("./types").TreeNodeOptions>, callback: (children: import("./types").TreeNodeOptions[]) => void) => void>;
}>> & {
    "onSelect-change"?: ((...args: any[]) => any) | undefined;
    "onCheck-change"?: ((...args: any[]) => any) | undefined;
}, {
    source: import("./types").TreeNodeOptions[];
    showCheckbox: boolean;
    checkStrictly: boolean;
}>>;
export default _default;
