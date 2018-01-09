/**选项卡组件
 * @author chenhaozhi
 */
<template>
  <transition :name="transition">
    <div v-show="isActive"
         class="tab-pane"
         :class="{ 'is-active': isActive }">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
import { event } from 'common/js/event.js';

export default {
  name: "cTabItem",
  props: {
    title: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    selected: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    topIcon: {
      type: String,
      default: ''
    },
    activeTopIcon: {
      type: String,
      default: ''
    },
    showBottomLine: {
      type: Boolean,
      default: true
    },
    sort: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      isActive: false,
      transition: "fade"
    };
  },
  beforeCreate() {
    this.isTabItem = true;
  },
  created(){
    this.setIcon(this.topIcon);
  },
  methods: {
    onActivated() {
      this.isActive = true;
      this.setIcon(this.activeTopIcon);
      event.$emit('tabItemActive', this.name);
    },
    deActivated() {
      this.isActive = false;
      this.setIcon(this.topIcon);
    },
    setIcon(icon){
      this.topIconPic = icon || '';
    }
  },
};
</script>