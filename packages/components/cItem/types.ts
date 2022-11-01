const itemProps = () => ({
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
  rightArrowShow: {
    type: Boolean,
    default: true,
  },
  rightArrowIcon: {
    type: String,
    default: "",
  },
});

export { itemProps };
