<template>
  <div class="main">
    <button @click="selectedNode">获取选中节点</button>
    <button @click="checkedNodes">获取勾选节点</button>
    <button @click="halfCheckedNodes">获取半勾选节点</button>
    <c-tree :source="list" :lazyLoad="lazyLoad" show-checkbox ref="Atree">
      <template #icon="loading">
        <i v-if="loading" class="iconfont iconcustom-icon ico-loading"></i>
        <i v-else class="iconfont iconzhankai"></i>
      </template>
    </c-tree>
  </div>
</template>

<script lang="tsx">
import { defineComponent, onMounted, ref } from "vue";
import cTree from "./cTree";
import { TreeInstance, TreeNodeOptions } from "./types";

function recursionPrimary(path = "0", level = 3): TreeNodeOptions[] {
  const list: TreeNodeOptions[] = [];
  for (let i = 0; i < 10; i += 1) {
    const nodeKey = `${path}-${i}`;
    const treeNode: TreeNodeOptions = {
      nodeKey,
      name: nodeKey,
      children: [],
      hasChildren: true,
    };

    if (level > 0) {
      treeNode.children = recursionPrimary(nodeKey, level - 1);
    } else {
      treeNode.hasChildren = false;
    }

    list.push(treeNode);
  }
  return list;
}

export default defineComponent({
  name: "TreeDemo",
  components: {
    cTree,
  },
  setup() {
    const renderNode = (node: TreeNodeOptions) => {
      return (
        <div style="padding: 0 4px;">
          <b style="color: #f60;">{node.name}</b>
        </div>
      );
    };
    const list = ref<TreeNodeOptions[]>([]);

    const Atree = ref<TreeInstance>();
    const selectedNode = () => {
      const node = Atree.value!.getSelectedNode();
      console.log(node);
    };
    const checkedNodes = () => {
      const nodes = Atree.value!.getCheckedNodes();
      console.log(nodes);
    };
    const halfCheckedNodes = () => {
      const nodes = Atree.value!.getHalfCheckedNodes();
      console.log(nodes);
    };
    const lazyLoad = (
      node: TreeNodeOptions,
      callback: (children: TreeNodeOptions[]) => void
    ) => {
      const result: TreeNodeOptions[] = [];
      for (let i = 0; i < 4; i += 1) {
        const nodeKey = `${node.nodeKey}-${i}`;
        const treeNode: TreeNodeOptions = {
          nodeKey,
          name: nodeKey,
          children: [],
          hasChildren: true,
        };
        result.push(treeNode);
      }
      setTimeout(() => {
        callback(result);
      }, 500);
    };
    onMounted(() => {
      list.value = recursionPrimary();
    });

    return {
      list,
      lazyLoad,
      renderNode,
      selectedNode,
      checkedNodes,
      halfCheckedNodes,
      Atree,
    };
  },
});
</script>
<style lang="scss"></style>
