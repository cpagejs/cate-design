/**开关组件 * @author cpagejs */
<template>
  <label
    class="c-switch-wrap"
    @click.prevent="toggle"
    :class="[{ 'c-switch-disabled': disabled }]"
  >
    <input
      type="checkbox"
      style="display: none"
      :checked="on"
    />
    <span
      class="c-switch-box"
      :class="[{ on: on }]"
      :style="colorStyle"
    >
      <small class="switcher"></small>
    </span>
  </label>
</template>

<script>
  export default {
    name: "cSwitch",
    props: {
      color: {
        type: String,
        default: "#a0a0a0",
      },
      activeColor: {
        type: String,
        default: "#448ff2",
      },
      checked: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        on: false,
        showText: "",
        colorStyle: {},
      };
    },
    watch: {
      checked(val) {
        this.on = val;
      },
      on(val) {
        this.colorStyle = {
          backgroundColor: val ? this.activeColor : this.color,
          borderColor: val ? this.activeColor : this.color,
          boxShadow: val
            ? this.activeColor + " 0px 0px 0px 12px inset"
            : this.color + " 0px 0px 0px 12px inset",
        };
      },
    },
    methods: {
      toggle() {
        this.on = !this.on;
        this.$emit("onSwitch", this.on);
      },
      val() {
        return this.on;
      },
    },
    created() {
      this.colorStyle = {
        backgroundColor: this.on ? this.activeColor : this.color,
        borderColor: this.on ? this.activeColor : this.color,
        boxShadow: this.on
          ? this.activeColor + " 0px 0px 0px 12px inset"
          : this.color + " 0px 0px 0px 12px inset",
      };
    },
    mounted() {
      if (this.checked) {
        this.on = true;
      } else {
        this.on = false;
      }
    },
  };
</script>

<style lang="scss">
  @use "./index" as *;
</style>
