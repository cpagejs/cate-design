const loadingProps = () => ({
  color: {
    type: String,
    default: "#6284e2",
  },
  styleLoading: {
    type: Object,
    default() {
      return {};
    },
  },
  type: {
    type: String,
    default: "dot",
  },
  huanLeftColor: {
    type: String,
    default: "#6284e2",
  },
  huanRightColor: {
    type: String,
    default: "#6284e2",
  },
});

export { loadingProps };
