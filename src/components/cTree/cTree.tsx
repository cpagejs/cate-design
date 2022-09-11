import { defineComponent, ref, watch } from "vue";
import "./index.scss";
import {
  nodeKey,
  RequiredTreeNodeOptions,
  TreeNodeInstance,
  TreeNodeOptions,
  TreeProps,
} from "./types";
import TreeNode from "./node";
// import { cloneDeep } from "lodash";
import deepClone from "project-libs/build/data/deepClone";
import { updateDownWards, updateUpwards } from "./utlils";
const props = TreeProps();

export default defineComponent({
  name: "cTree",
  props: props,
  components: {
    TreeNode,
  },
  emits: ["select-change", "check-change"],
  setup(props, { emit, slots, expose }) {
    const flatList = ref<RequiredTreeNodeOptions[]>([]);
    // 泛型推导优先
    const loading = ref(false);
    const selectKey = ref<nodeKey>("");
    function falttenTree(source: TreeNodeOptions[]): RequiredTreeNodeOptions[] {
      const res: RequiredTreeNodeOptions[] = [];

      const recursion = (
        list: TreeNodeOptions[],
        level = 0,
        parent: RequiredTreeNodeOptions | null = null
      ): RequiredTreeNodeOptions[] => {
        return list.map((item) => {
          const node: RequiredTreeNodeOptions = {
            ...item,
            level,
            loading: false,
            disabled: item.disabled || false,
            expanded: item.expanded || false,
            selected: item.selected || false,
            checked: item.checked || parent?.checked || false,
            hasChildren: item.hasChildren || false,
            parentKey: parent?.nodeKey || null, //除开顶级node都有
            children: item.children || [],
          };

          if (node.selected) {
            selectKey.value = node.nodeKey;
          }
          res.push(node);
          if (node.children.length && item.expanded) {
            // 要展开是才渲染 所以需要判断展开
            node.children = recursion(node.children, level + 1, node);
          }
          return node;
        });
      };
      if (source.length) {
        recursion(source);
      }
      return res;
    }

    watch(
      () => props.source,
      (newVal) => {
        flatList.value = falttenTree(newVal);
      },
      { immediate: true }
    );

    const expandNode = (
      node: RequiredTreeNodeOptions,
      children?: TreeNodeOptions[]
    ) => {
      // 深拷贝
      const trueChildren = children?.length
        ? children
        : deepClone(node.children);
      node.children = trueChildren.map((item) => {
        return {
          ...item,
          level: item.level || node.level + 1,
          loading: false,
          disabled: item.disabled || false,
          expanded: item.expanded || false,
          selected: item.selected || false,
          // false也是和法治  不能用  ?? 更严格的或  只有前面是null和undefined才会走到后面去
          checked: item.checked || false,
          hasChildren: item.hasChildren || false,
          parentKey: node.nodeKey || null, //除开顶级node都有
          children: item.children || [],
        };
      });

      const targetIndex = flatList.value.findIndex(
        (item) => item.nodeKey === node.nodeKey
      );
      if (targetIndex > -1) {
        flatList.value.splice(
          targetIndex + 1,
          0,
          ...(node.children as RequiredTreeNodeOptions[])
        );
        console.log("flatList:", flatList.value);
      }
    };

    // 收起
    const collapseNode = (node: RequiredTreeNodeOptions) => {
      const delKeys: nodeKey[] = [];
      const recursion = (currentNode: RequiredTreeNodeOptions) => {
        if (currentNode.children.length) {
          currentNode.children.forEach((item) => {
            delKeys.push(item.nodeKey);
            if (item.expanded) {
              // 需要收起
              item.expanded = false;
              recursion(item as RequiredTreeNodeOptions);
            }
          });
        }
      };

      recursion(node);
      if (delKeys.length) {
        flatList.value = flatList.value.filter(
          (item) => !delKeys.includes(item.nodeKey)
        );
      }
    };

    expose({
      getSelectedNode: (): RequiredTreeNodeOptions | undefined => {
        return flatList.value.find((item) => item.selected);
      },
      getCheckedNodes: (): RequiredTreeNodeOptions[] => {
        return flatList.value.filter((item) => item.checked);
      },
      getHalfCheckedNodes: (): RequiredTreeNodeOptions[] => {
        return nodeRefs.value
          .filter((item) => item.halfChecked())
          .map((item) => item.node);
      },
    });

    // 获取for循环下面的ref节点
    const nodeRefs = ref<TreeNodeInstance[]>([]);
    const setNodesRef = (index: number, node: TreeNodeInstance) => {
      if (node) {
        nodeRefs.value[index] = node;
        // console.log('nodesRef:', nodeRefs.value);
      }
    };

    const handleToggleExpand = (node: RequiredTreeNodeOptions) => {
      if (loading.value) return;
      node.expanded = !node.expanded;
      if (node.expanded) {
        // 展开此node下面的children  首次展开是 用户可能自带children

        if (node.children.length) {
          expandNode(node);
        } else {
          // 懒加 载
          if (props.lazyLoad && node.hasChildren) {
            node.loading = true; // 控制图标
            loading.value = true; //防止重复
            props.lazyLoad(node, (children) => {
              console.log("懒加载后的children:", children);

              if (children.length) {
                expandNode(node, children);
              }
              node.loading = false; // 控制图标
              loading.value = false; //防止重复
            });
          } else {
            node.expanded = !node.expanded;
            console.error("没有children且懒加载数据也没有");
          }
        }
      } else {
        // 收起
        collapseNode(node);
      }
    };

    const handleSelectChange = (node: RequiredTreeNodeOptions) => {
      node.selected = !node.selected;

      // 选中逻辑
      if (selectKey.value === node.nodeKey) {
        selectKey.value = "";
      } else {
        const preSelectedIndex = flatList.value.findIndex(
          (item) => item.nodeKey === selectKey.value
        );
        if (preSelectedIndex > -1) {
          flatList.value[preSelectedIndex].selected = false;
        }
        selectKey.value = node.nodeKey;
      }

      emit("select-change", node);
    };

    const handleCheckChange = ([checked, node]: [
      boolean,
      RequiredTreeNodeOptions
    ]) => {
      node.checked = checked;
      console.log("checkStrick", props.checkStrictly);

      if (!props.checkStrictly) {
        // 向下更新子节点勾选
        updateDownWards(checked, node);
        // 向上更新父节点半选
        updateUpwards(node, flatList.value);
      }
      emit("check-change", node);
    };

    const renderChildren = () => {
      return flatList.value.map((node, index) => {
        return (
          <TreeNode
            key={node.nodeKey}
            node={node}
            onToggleExpand={handleToggleExpand}
            onSelectChange={handleSelectChange}
            render={props.render}
            iconSlot={slots.icon}
            showCheckbox={props.showCheckbox}
            onCheckChange={handleCheckChange}
            checkStrictly={props.checkStrictly}
            ref={setNodesRef.bind(null, index) as any}
          />
        );
      });
    };

    return () => {
      return (
        <div class="c-tree-wrap">
          <div class="c-tree">{renderChildren()}</div>
        </div>
      );
    };
  },
});
