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
});

export { loadingProps };
