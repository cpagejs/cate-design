const buttonFooterProps = () => ({
  text: {
    type: String,
    default: "",
  },
  textColor: {
    type: String,
    default: "#fff",
  },
  backgroungColor: {
    type: String,
    default: "#448FF2",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

export { buttonFooterProps };
