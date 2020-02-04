/**
 * @author 夏小宅
 * 提示框组件
 */
<template>
  <transition :name="fadeIn">
    <div class="c-alert-container" :class="position" v-show="show">
      <div class="alert-mask" v-show="showBg"></div>
      <transition :name="translate">
        <div class="alert-box" :class="[`alert-shape-${shape}`]" v-show="show">
          <em class="alert-type" :class="[`alert-type-${type}`]" v-if="shape == 'square' && type != 'info'"></em>
          <div class="text"><p>{{text}}</p></div>
        </div>
      </transition>
    </div>
  </transition>
</template>
 
<script>
export default {
  name: "Alert",
  data() {
    return {};
  },
  props: {
    show: {
      default: false
    },
    text: {
      default: "loading"
    },
    type: {
      type: String,
      default: 'info'
    },
    shape: {
      type: String,
      default: 'square'
    },
    position: {
      default: "center"
    },
    showBg: {
      default: false
    },
    delay: {
      default: 1500
    },
    transition: {
      // 是否开启动画
      default: true
    }
  },
  mounted() {
    
  },
  computed: {
    translate() {
      // 根据props，生成相对应的动画
      if (!this.transition) {
        return "";
      } else {
        if (this.position === "top") {
          return "translate-top";
        } else if (this.position === "middle") {
          return "translate-middle";
        } else if (this.position === "bottom") {
          return "translate-bottom";
        }
      }
    },
    fadeIn() {
      if (!this.transition) {
        return "";
      } else {
        return "fadeIn";
      }
    },
  }
};
</script>
 
<style lang="scss">
  @import './toast';
</style>