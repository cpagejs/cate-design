const timeCircleProps = () => ({
  timer: {
    type: Number,
    default: 60,
  },
  showNum: {
    // 是否显示数字
    type: Boolean,
    default: true,
  },
});

export { timeCircleProps };
