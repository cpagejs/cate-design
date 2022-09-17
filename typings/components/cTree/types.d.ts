import { PropType, Slot } from "vue";
declare type nodeKey = string | number;
declare type CustomEventFuncType<T> = PropType<(arg: T) => void>;
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
declare type RequiredTreeNodeOptions = Required<TreeNodeOptions>;
export declare type renderFunc<T> = PropType<(node: T) => JSX.Element>;
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
    render: renderFunc<Required<TreeNodeOptions>>;
    lazyLoad: PropType<(node: RequiredTreeNodeOptions, callback: (children: TreeNodeOptions[]) => void) => void>;
};
declare const TreeNodePorps: () => {
    node: {
        type: PropType<Required<TreeNodeOptions>>;
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
    onCheckChange: CustomEventFuncType<[boolean, Required<TreeNodeOptions>]>;
    iconSlot: PropType<Slot>;
    render: renderFunc<Required<TreeNodeOptions>>;
    onSelectChange: CustomEventFuncType<Required<TreeNodeOptions>>;
    onToggleExpand: CustomEventFuncType<Required<TreeNodeOptions>>;
};
declare const renderNodeProps: () => {
    node: {
        type: PropType<Required<TreeNodeOptions>>;
        required: boolean;
    };
    render: {
        type: renderFunc<Required<TreeNodeOptions>>;
        required: boolean;
    };
};
export { TreeNodeInstance, TreeInstance, CustomEventFuncType, renderNodeProps, TreeNodePorps, TreeProps, TreeNodeOptions, nodeKey, RequiredTreeNodeOptions, };
