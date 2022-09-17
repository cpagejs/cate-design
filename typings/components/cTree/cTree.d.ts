import "./index.scss";
import { TreeNodeOptions } from "./types";
declare const _default: import("vue").DefineComponent<{
    source: {
        type: import("vue").PropType<TreeNodeOptions[]>;
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
    render: import("./types").renderFunc<Required<TreeNodeOptions>>;
    lazyLoad: import("vue").PropType<(node: Required<TreeNodeOptions>, callback: (children: TreeNodeOptions[]) => void) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select-change" | "check-change")[], "select-change" | "check-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    source: {
        type: import("vue").PropType<TreeNodeOptions[]>;
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
    render: import("./types").renderFunc<Required<TreeNodeOptions>>;
    lazyLoad: import("vue").PropType<(node: Required<TreeNodeOptions>, callback: (children: TreeNodeOptions[]) => void) => void>;
}>> & {
    "onSelect-change"?: ((...args: any[]) => any) | undefined;
    "onCheck-change"?: ((...args: any[]) => any) | undefined;
}, {
    source: TreeNodeOptions[];
    showCheckbox: boolean;
    checkStrictly: boolean;
}>;
export default _default;
