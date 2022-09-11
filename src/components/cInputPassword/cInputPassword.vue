

/** 密码输入框
* @author 夏小宅
*/
<template>
  <div class="c-input-password" :class="{disabled: disabled}">
    <span>{{label}}</span>
    <input type="password" ref="input" v-bind:value="value" @input="_input()" @blur="_blur()" :length="length"
      :placeholder="placeholder" autocapitalize="off" :class="{disabled: disabled}" v-if="showPwd" />
    <input type="text" ref="input" v-bind:value="value" @input="_input()" @blur="_blur()" :length="length"
      :placeholder="placeholder" autocapitalize="off" :class="{disabled: disabled}" v-if="!showPwd" />
    <em class="input-pwd-eye" :class="{invisible: invisible}" v-if="showToggle" @click="toggle">
    </em>
  </div>
</template>

<script>
export default {
  name: 'cInputPassword',
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      default: '',
      type: String
    },
    length: {
      default: 20,
      type: Number
    },
    placeholder: {
      default: '请输入密码',
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showToggle: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      showPwd: {
        type: Boolean,
        default: true
      },
      invisible: false
    }
  },
  methods: {
    _input() {
      this.$emit('onInput', this.$refs.input.value);
    },
    _blur() {
      this.$emit('onBlur', this.$refs.input.value);
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
    }
  }
}
</script>