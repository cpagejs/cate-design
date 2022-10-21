/** 确认框组件 * @author 夏小宅 */
<template>
  <div class="c-confirm-container" v-if="isShow">
    <transition name="confirm-fade">
      <div
        class="screen-fixed confirm-wrapper"
        @click.prevent="closeConfirm($event)"
      >
        <!-- 普通类型 -->
        <div class="confirm-content" v-if="type == 1">
          <div class="confirm-inner">
            <div class="confirm-content-body" :style="innerStyle">
              <slot name="inner"></slot>
            </div>
            <div class="confirm-content-footer" v-if="showBtn">
              <div
                @click="cancel"
                class="operate-btn left"
                v-if="showCancelBtn"
              >
                {{ cancelText }}
              </div>
              <div @click="confirm" class="operate-btn">{{ confirmText }}</div>
            </div>
            <div v-if="!showBtn">
              <slot name="btn"></slot>
            </div>
          </div>
        </div>
        <!-- 支持顶部背景图，按钮组有空隙 -->
        <div class="confirm-content confirm-content2" v-if="type == 2">
          <div class="confirm-header">
            <slot name="header"></slot>
          </div>
          <div class="confirm-inner" :style="innerStyle">
            <div class="confirm-content-body">
              <slot name="inner"></slot>
            </div>
            <div class="confirm-content-footer2" v-if="showBtn">
              <div
                @click="cancel"
                class="operate-btn left"
                :style="cancelBtnStyle"
                v-if="showCancelBtn"
              >
                {{ cancelText }}
              </div>
              <div
                @click="confirm"
                class="operate-btn right"
                :style="confirmBtnStyle"
              >
                {{ confirmText }}
              </div>
            </div>
            <div v-if="!showBtn">
              <slot name="btn"></slot>
            </div>
          </div>
        </div>
        <!-- 底部取消按钮，大背景图 -->
        <div class="confirm-content confirm-content3" v-if="type == 3">
          <div class="confirm-inner" :style="innerStyle">
            <slot name="inner"></slot>
          </div>
          <div class="confirm-close">
            <img :src="closeImg" alt="" @click="closeImgFn" />
          </div>
        </div>
      </div>
    </transition>
    <div
      class="screen-fixed confirm-bg"
      v-show="showBg && isShow"
      :style="{ backgroundColor: bgColor }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "cConfirm",
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
    type: {
      type: Number,
      default: 1,
    },
    confirmText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    showBtn: {
      type: Boolean,
      default: true,
    },
    showCancelBtn: {
      type: Boolean,
      default: true,
    },
    cancelBtnStyle: {
      type: Object,
      default: function () {
        return {};
      },
    },
    confirmBtnStyle: {
      type: Object,
      default: function () {
        return {};
      },
    },
    innerStyle: {
      type: Object,
      default: function () {
        return {};
      },
    },
    showBg: {
      type: Boolean,
      default: true,
    },
    bgColor: {
      type: String,
      default: "rgba(0,0,0,0.4)",
    },
  },
  data() {
    return {
      openConfirm: false,
      closeImg: require("./close.png"),
    };
  },
  created() {
    this.openConfirm = this.isShow;
  },
  methods: {
    show() {
      this.openConfirm = true;
    },
    hide() {
      this.openConfirm = false;
    },
    cancel() {
      this.hide();
      this.$emit("cancel");
    },
    confirm() {
      this.hide();
      this.$emit("confirm");
    },
    closeConfirm(e) {
      if (
        e.target.children.length &&
        e.target.children[0].getAttribute("class") &&
        e.target.children[0].getAttribute("class").indexOf("confirm-content") >
          -1
      ) {
        this.hide();
      }
    },
    closeImgFn() {
      this.hide();
      this.$emit("cancel");
    },
  },
};
</script>

<style lang="scss">
@import "./index";
</style>
