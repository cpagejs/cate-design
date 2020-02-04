/**@author 夏小宅
* 子元素class需要有item
<div class="item"></div>
*/
<template>
  <section class="c-scroll-x-container" ref="myScrollX" :style="{height: height + 'px'}">
    <div class="c-scroll-x-inner" :style="{width: width + 'px'}">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  import BScroll from "better-scroll";
  import util from '../../common/js/util.js';

  export default {
    name: 'cScrollX',
    data() {
      return {
        width: '',
        height: ''
      }
    },
    props: {},
    created() {

    },
    mounted() {
      this.setWidth();
      this.setHeight();

      setTimeout(() => {
        this._initScroll();
      }, 20);
    },
    methods: {
      _initScroll() {
        const self = this;
        self.scroll = new BScroll(self.$refs.myScrollX, {
          probeType: 1,
          scrollX: true,
          click: true
        });
      },
      setWidth() {
        const self = this.$refs.myScrollX;
        const items = self.querySelectorAll('.scroll-x-container .scroll-x-inner>div');
        let width = 0;
        for (let i = 0; i < items.length; i++) {
          width += util.width(items[i]);
        }
        this.width = width + 20;
      },
      setHeight() {
        const self = this.$refs.myScrollX;
        const items = self.querySelectorAll('.scroll-x-container .scroll-x-inner>div');
        let height = 0;
        for (let i = 0; i < items.length; i++) {
          let thisHeight = util.height(items[i]);
          height = (thisHeight > height) ? thisHeight : height;
        }
        this.height = height;
      }
    },
  }
</script>

<style lang="scss">
  @import '../../common/css/mixin';

  .c-scroll-x-container {
    position: relative;
    width: auto;
    overflow: hidden;
  }

  .c-scroll-x-inner {
    @include flex-justify(space-between);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    .item {
      flex: 1;
      flex-wrap: nowrap;
    }
  }
</style>
