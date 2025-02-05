<template>
  <div className="main">
    <c-menu
      defaultIndex="0"
      :onSelect="handleClick"
    >
      <c-menu-item>link1</c-menu-item>
      <c-menu-item disabled>link2</c-menu-item>
      <c-sub-menu title="下拉">
        <c-menu-item>link2-1</c-menu-item>
        <c-menu-item>link2-2</c-menu-item>
        <c-menu-item>link2-3</c-menu-item>
      </c-sub-menu>
      <c-menu-item>link3</c-menu-item>
      <!-- <c-menu-item>link3</c-menu-item>
      <c-menu-item>link3</c-menu-item>
      <c-menu-item>link3</c-menu-item>
      <c-menu-item>link3</c-menu-item> -->
    </c-menu>

    <c-menu
      defaultIndex="0"
      :onSelect="handleClick"
      type="vertical"
      :style="{ marginTop: '10px' }"
    >
      <c-menu-item>menu1</c-menu-item>
      <c-menu-item disabled>menu2</c-menu-item>
      <c-sub-menu title="下拉">
        <c-menu-item>menu2-1</c-menu-item>
        <c-menu-item>menu2-2</c-menu-item>
      </c-sub-menu>
    </c-menu>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import cMenu from "./cMenu";
  import cMenuItem from "./menuItem";
  import cSubMenu from "./subMenu";
  export default defineComponent({
    name: "MenuDemo",
    components: {
      cMenu,
      cMenuItem,
      cSubMenu,
    },
    setup() {
      const handleClick = (index: string) => {
        // alert(index);
      };
      return { handleClick };
    },
  });
</script>
<style lang="scss"></style>
