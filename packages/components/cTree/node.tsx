import classNames from "classnames";
import { computed, defineComponent } from "vue";
import { TreeNodePorps } from "./types";
import RenderNode from "./render";
import cCheckbox from "../cCheckBox/cCheckBox";

const props = TreeNodePorps();
export default defineComponent({
  name: "TreeNode",
  props: props,
  emits: ["toggle-expand", "select-change", "check-change"],
  components: {
    cCheckbox,
  },
  setup(props, { emit, expose }) {
    const halfChecked = computed(() => {
      let res = false;

      if (!props.checkStrictly && props.node?.hasChildren) {
        console.log("props:", props.checkStrictly, props.node?.hasChildren);

        const { children } = props.node;
        const checkedChildren = children.filter((item) => item.checked);
        res =
          checkedChildren.length > 0 &&
          checkedChildren.length < children.length;
      }
      return res;
    });

    expose({
      node: props.node,
      // halfchecked变量 只有给方法才是响应式的
      halfChecked: () => halfChecked.value,
    });

    return () => {
      const { node, render, iconSlot, showCheckbox } = props;

      const handleCheckChange = (checked: boolean) => {
        emit("check-change", [checked, props.node]);
      };

      const handleExpand = () => {
        emit("toggle-expand", props.node);
      };
      const renderArrow = () => {
        return (
          <div
            className={["node-arrow", props.node?.expanded ? "expanded" : ""]}
          >
            {node!.hasChildren ? (
              iconSlot ? (
                iconSlot(node?.loading)
              ) : node?.loading ? (
                <i className="iconfont iconloading ico-loading"></i>
              ) : (
                <i className="iconfont iconExpand"></i>
              )
            ) : null}
          </div>
        );
      };
      const titleClasses = classNames("node-title", {
        disabled: node?.disabled,
        selected: node?.selected && !showCheckbox,
      });

      const handleSelect = (e: MouseEvent) => {
        e.stopPropagation(); //组织展开事件触发
        e.preventDefault();

        if (!node?.disabled) {
          emit("select-change", props.node);
        }
      };
      const sameContent = () => {
        return render ? (
          <RenderNode
            render={render}
            node={node}
          ></RenderNode>
        ) : (
          <div className={titleClasses}>{node!.name}</div>
        );
      };
      const renderContent = () => {
        if (showCheckbox) {
          return (
            <c-Checkbox
              disabled={node?.disabled}
              modelValue={node?.checked}
              halfChecked={halfChecked.value}
              onChange={handleCheckChange}
              className="node-content node-checkbox"
            >
              {sameContent()}
            </c-Checkbox>
          );
        }

        return (
          <div
            onClick={handleSelect}
            className="node-content node-text"
          >
            {sameContent()}
          </div>
        );
      };

      return (
        <div
          className="c-tree-node"
          style={{ paddingLeft: node!.level * 18 + "px" }}
          key={node!.nodeKey}
          onClick={handleExpand}
        >
          {renderArrow()}
          {renderContent()}
        </div>
      );
    };
  },
});
