/**@author 夏小宅
item组件
*/
<template>
  <div class="c-cell-item" @click="onClickFn()">
    <div class="cell-left">
      <img :src="avatar" class="cell-left-icon" v-if="avatar" />
      <div class="cell-left-info">
        <div class="cell-left-title">{{title}}</div>
        <div v-if="description" class="cell-left-desc">{{description}}</div>
      </div>
    </div>
    <div class="cell-right">
      <span class="right-text">{{rightText}}</span>
      <em class="icon" v-if="rightArrow"></em>
    </div>
  </div>
</template>

<script>
export default {
  name: "cItem",
  props: {
    avatar: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    rightText: {
      type: String,
      default: "",
    },
    rightArrow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      
    };
  },
  created() {

  },
  methods: {
    onClickFn() {
      this.$emit("onClick");
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "../../common/css/mixin";
.c-cell-item {
  @include flex-justify(space-between);
  padding: 12px 0;  
  font-size: 16px;
  color: #333;
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  .cell-left {
    @include flex-justify(space-between);
    .cell-left-info {
        .cell-left-desc {
            padding-top: 10px;
            @include font(15px, rgba($color: #000000, $alpha: 0.4));
        }
    }
    img {
      width: 30px;
      height: 30px;
      padding-right: 15px;
      object-fit: cover;
    }
  }
  .cell-right {
    @include flex-justify(space-between);
    .right-text {
      padding-left: 15px;
      @include font(15px, rgba($color: #000000, $alpha: 0.4));
    }
    .icon {
      width: 20px;
      height: 20px;
      background: url(./right.png) no-repeat right center;
      background-size: cover;
    }
  }
}
</style>