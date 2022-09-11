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
  rightArrow: {
    type: Boolean,
    default: true,
  }
});

export {
  itemProps
};