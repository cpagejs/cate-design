/**选项卡组件
 * @author 夏小宅
 */
<template>
  <section class="c-tabs-container">
    <ul class="tab-title" :class="[`tab-pos-${position}`]">
      <li v-for="(tab, index) in tabItems"
        :key="tab.id"
        :class="{ 'tab-is-active': isActive(index), 'tab-is-disabled': tab.disabled, }"
        :style="{'color': isActive(index) ? activeColor : normalColor, 'borderBottomColor': showBottomLine ? (isActive(index) ? activeColor : normalColor) : 'transparent'}"
        @click.prevent="handleSelect(index, 'click')"
      >
        <div class="tab-inner" :class="{'border-right': showBorderRight}">
          <img 
          :src="tab.topIconPic" 
          class="top-icon"
          :class="{ 'is-active-img': isActive(index) }"
          :style="{ width: iconWidth, height: iconHeight }"
          v-if="tab.topIconPic != ''">
          <div class="tab-title-info" v-html="tab.title">
            <slot name="tab"></slot>
          </div>
        </div>
      </li>
    </ul>
    <div class="tab-content">
        <slot></slot>
    </div>
  </section>
</template>
<script>
import { event } from 'common/js/event.js';

export default {
  name: "cTabs",
  props: {
    position: {
      type: String,
      default: 'normal'
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    normalColor: {
      type: String,
      default: '#333'
    },
    activeColor: {
      type: String,
      default: '#448FF2'
    },
    showBottomLine: {
      type: Boolean,
      default: true
    },
    showBorderRight: {
      type: Boolean,
      default: false
    },
    iconWidth: {
      type: String,
      default: '40px'
    },
    iconHeight: {
      type: String,
      default: '40px'
    }
  },
  data() {
    return {
      tabItems: [],
      selectedIndex: 0,
      prevSelectedIndex: -1,
    };
  },
  watch: {
    activeIndex(val) {
      this.selectedIndex = val;
    }
  },
  computed: {

  },
  methods: {
    isActive(index) {
      return index === this.selectedIndex;
    },
    handleSelect(index, type) {
      if (this.prevSelectedIndex !== -1) {
        this.tabItems[this.selectedIndex].deActivated();
      }
      
      this.prevSelectedIndex = this.selectedIndex;
      this.selectedIndex = index;
      this.tabItems[index].onActivated(index, this.prevSelectedIndex);
      event.$emit('tabChange', index);
      this.$emit('onClick', index);
    }
  },
  mounted() {
    this.tabItems = this.$children.filter(child => child.isTabItem);
    this.handleSelect(this.activeIndex);
  }
};
</script>

<style lang="scss">
  @import "./tab";
</style>
