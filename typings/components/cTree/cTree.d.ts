import "./index.scss";
import { RequiredTreeNodeOptions, TreeNodeOptions } from "./types";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    render: import("./types").renderFunc<RequiredTreeNodeOptions>;
    lazyLoad: import("vue").PropType<(node: RequiredTreeNodeOptions, callback: (children: TreeNodeOptions[]) => void) => void>;
}>, () => import("react").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select-change" | "check-change")[], "select-change" | "check-change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    render: import("./types").renderFunc<RequiredTreeNodeOptions>;
    lazyLoad: import("vue").PropType<(node: RequiredTreeNodeOptions, callback: (children: TreeNodeOptions[]) => void) => void>;
}>> & Readonly<{
    "onSelect-change"?: ((...args: any[]) => any) | undefined;
    "onCheck-change"?: ((...args: any[]) => any) | undefined;
}>, {
    showCheckbox: boolean;
    checkStrictly: boolean;
    source: TreeNodeOptions[];
}, {}, {
    TreeNode: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        node: {
            type: import("vue").PropType<RequiredTreeNodeOptions>;
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
        onCheckChange: import("./types").CustomEventFuncType<[boolean, RequiredTreeNodeOptions]>;
        iconSlot: import("vue").PropType<import("vue").Slot>;
        render: import("./types").renderFunc<RequiredTreeNodeOptions>;
        onSelectChange: import("./types").CustomEventFuncType<RequiredTreeNodeOptions>;
        onToggleExpand: import("./types").CustomEventFuncType<RequiredTreeNodeOptions>;
    }>, () => import("react").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("toggle-expand" | "select-change" | "check-change")[], "toggle-expand" | "select-change" | "check-change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        node: {
            type: import("vue").PropType<RequiredTreeNodeOptions>;
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
        onCheckChange: import("./types").CustomEventFuncType<[boolean, RequiredTreeNodeOptions]>;
        iconSlot: import("vue").PropType<import("vue").Slot>;
        render: import("./types").renderFunc<RequiredTreeNodeOptions>;
        onSelectChange: import("./types").CustomEventFuncType<RequiredTreeNodeOptions>;
        onToggleExpand: import("./types").CustomEventFuncType<RequiredTreeNodeOptions>;
    }>> & Readonly<{
        "onToggle-expand"?: ((...args: any[]) => any) | undefined;
        "onSelect-change"?: ((...args: any[]) => any) | undefined;
        "onCheck-change"?: ((...args: any[]) => any) | undefined;
    }>, {
        showCheckbox: boolean;
        checkStrictly: boolean;
    }, {}, {
        cCheckbox: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            modelValue: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            halfChecked: {
                type: BooleanConstructor;
                default: boolean;
            };
            bgColor: {
                type: StringConstructor;
                default: string;
            };
            borderColor: {
                type: StringConstructor;
                default: string;
            };
            round: {
                type: BooleanConstructor;
                default: boolean;
            };
            onChange: import("./types").CustomEventFuncType<boolean>;
        }>, () => import("react").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "onChange")[], "update:modelValue" | "onChange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            halfChecked: {
                type: BooleanConstructor;
                default: boolean;
            };
            bgColor: {
                type: StringConstructor;
                default: string;
            };
            borderColor: {
                type: StringConstructor;
                default: string;
            };
            round: {
                type: BooleanConstructor;
                default: boolean;
            };
            onChange: import("./types").CustomEventFuncType<boolean>;
        }>> & Readonly<{
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onOnChange?: ((...args: any[]) => any) | undefined;
        }>, {
            disabled: boolean;
            modelValue: boolean;
            halfChecked: boolean;
            bgColor: string;
            borderColor: string;
            round: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
