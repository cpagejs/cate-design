const switchProps = () => ({
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
});

export { switchProps };
