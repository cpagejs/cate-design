const loadingProps = () => ({
  isShow: {
    type: Boolean,
    default: false,
  },
  showMask: {
    type: Boolean,
    default: true,
  },
  position: {
    type: String,
    default: "left",
  },
});

export { loadingProps };
