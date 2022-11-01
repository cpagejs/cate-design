const tabPaneProps = () => ({
  name: String,
});

const tabsProps = () => ({
  modelValue: {
    type: String,
    default: "",
  },
});

export { tabsProps, tabPaneProps };
