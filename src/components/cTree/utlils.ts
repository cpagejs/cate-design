import { RequiredTreeNodeOptions } from "./types";

// 向下递归更新节点的勾选状态
export function updateDownWards(
  checked: boolean,
  node: RequiredTreeNodeOptions
) {
  const update = (children: RequiredTreeNodeOptions[]) => {
    if (children.length) {
      children.forEach((child) => {
        child.checked = checked;
        if (child.children.length) {
          update(child.children as RequiredTreeNodeOptions[]);
        }
      });
    }
  };
  update(node.children as RequiredTreeNodeOptions[]);
}

export function updateUpwards(
  node: RequiredTreeNodeOptions,
  flatList: RequiredTreeNodeOptions[]
) {
  const update = (currentNode: RequiredTreeNodeOptions) => {
    if (currentNode.parentKey) {
      const parentNode = flatList.find(
        (item) => item.nodeKey === currentNode.parentKey
      );
      if (parentNode) {
        // 看是否全部被勾选
        const parentChecked = !parentNode.children.some(
          (child) => !child.checked
        );
        if (parentChecked !== parentNode.checked) {
          parentNode.checked = parentChecked;
          update(parentNode);
        }
      }
    }
  };
  update(node);
}
