/** 密码输入框 * @author cpagejs */
<template>
  <div class="c-input-password">
    <span>{{ label }}</span>
    <input
      type="password"
      ref="input"
      v-bind:value="value"
      @input="_input()"
      @blur="_blur()"
      :length="length"
      :placeholder="placeholder"
      autocapitalize="off"
      :class="{ 'c-input-password_disabled': disabled }"
      v-if="showPwd"
    />
    <input
      type="text"
      ref="input"
      v-bind:value="value"
      @input="_input()"
      @blur="_blur()"
      :length="length"
      :placeholder="placeholder"
      autocapitalize="off"
      :class="{ 'c-input-password_disabled': disabled }"
      v-if="!showPwd"
    />
    <em
      class="pwd-eye"
      :class="{ invisible: invisible }"
      v-if="showToggle"
      @click="toggle"
    >
    </em>
  </div>
</template>

<script>
  import { inputPwdProps } from "./types";
  const props = inputPwdProps();
  export default {
    name: "cInputPassword",
    props: props,
    data() {
      return {
        showPwd: {
          type: Boolean,
          default: true,
        },
        invisible: false,
      };
    },
    methods: {
      _input() {
        this.$emit("onInput", this.$refs.input.value);
      },
      _blur() {
        this.$emit("onBlur", this.$refs.input.value);
      },
      focus() {
        this.$refs.input.focus();
      },
      val() {
        return this.$refs.input.value;
      },
      toggle() {
        const val = this.$refs.input.value;
        this.showPwd = !this.showPwd;
        this.invisible = !this.invisible;
        setTimeout(() => {
          this.$refs.input.value = val;
        }, 0);
      },
    },
  };
</script>
<style lang="scss">
  @use "./index" as *;
</style>
