const inputPwdProps = () => ({
  value: {
    type: String,
    default: "",
  },
  label: {
    default: "",
    type: String,
  },
  length: {
    default: 20,
    type: Number,
  },
  placeholder: {
    default: "请输入密码",
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  showToggle: {
    type: Boolean,
    default: true,
  },
});

export { inputPwdProps };
