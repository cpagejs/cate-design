import { PropType, Slot } from "vue";
type nodeKey = string | number;
type CustomEventFuncType<T> = PropType<(arg: T) => void>;
interface TreeNodeOptions {
    nodeKey: nodeKey;
    name: string;
    level?: number;
    loading?: boolean;
    disabled?: boolean;
    expanded?: boolean;
    selected?: boolean;
    checked?: boolean;
    hasChildren?: boolean;
    children?: TreeNodeOptions[];
    parentKey?: nodeKey | null;
}
type RequiredTreeNodeOptions = Required<TreeNodeOptions>;
export type renderFunc<T> = PropType<(node: T) => any>;
interface TreeNodeInstance {
    node: RequiredTreeNodeOptions;
    halfChecked: () => boolean;
}
interface TreeInstance {
    getSelectedNode: () => RequiredTreeNodeOptions | undefined;
    getCheckedNodes: () => RequiredTreeNodeOptions[] | undefined;
    getHalfCheckedNodes: () => RequiredTreeNodeOptions[] | undefined;
}
declare const TreeProps: () => {
    source: {
        type: PropType<TreeNodeOptions[]>;
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
    render: renderFunc<RequiredTreeNodeOptions>;
    lazyLoad: PropType<(node: RequiredTreeNodeOptions, callback: (children: TreeNodeOptions[]) => void) => void>;
};
declare const TreeNodePorps: () => {
    node: {
        type: PropType<RequiredTreeNodeOptions>;
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
    onCheckChange: CustomEventFuncType<[boolean, RequiredTreeNodeOptions]>;
    iconSlot: PropType<Slot>;
    render: renderFunc<RequiredTreeNodeOptions>;
    onSelectChange: CustomEventFuncType<RequiredTreeNodeOptions>;
    onToggleExpand: CustomEventFuncType<RequiredTreeNodeOptions>;
};
declare const renderNodeProps: () => {
    node: {
        type: PropType<RequiredTreeNodeOptions>;
        required: boolean;
    };
    render: {
        type: renderFunc<RequiredTreeNodeOptions>;
        required: boolean;
    };
};
export { TreeNodeInstance, TreeInstance, CustomEventFuncType, renderNodeProps, TreeNodePorps, TreeProps, TreeNodeOptions, nodeKey, RequiredTreeNodeOptions, };
