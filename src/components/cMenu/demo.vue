<template>
  <div class="main">
    <c-menu defaultIndex="0" mode="vertical" :onSelect="handleClick">
      <menu-item>link1</menu-item>
      <menu-item disabled>link2</menu-item>
      <sub-menu title="下拉">
        <menu-item>link2-1</menu-item>
        <menu-item>link2-2</menu-item>
        <menu-item>link2-3</menu-item>
      </sub-menu>
      <menu-item>link3</menu-item>
    </c-menu>

    <c-menu defaultIndex="0" :onSelect="handleClick">
      <menu-item>menu1</menu-item>
      <menu-item disabled>menu2</menu-item>
      <sub-menu title="下拉">
        <menu-item>menu2-1</menu-item>
        <menu-item>menu2-2</menu-item>
      </sub-menu>
    </c-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import cMenu from "./cMenu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";
export default defineComponent({
  name: "MenuDemo",
  components: {
    cMenu,
    MenuItem,
    SubMenu,
  },
  setup() {
    const handleClick = (index: string) => {
      alert(index);
    };
    return { handleClick };
  },
});
</script>
<style lang="scss"></style>
