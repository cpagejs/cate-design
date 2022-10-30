const timeOutProps = () => ({
  date: {
    type: String,
    default: "2023-10-16 10:15:26",
  },
  bgColor: {
    type: String,
    default: "#fd7e10",
  },
  textColor: {
    type: String,
    default: "#fff",
  },
  type: {
    type: Number,
    default: 1
  }
});

export { timeOutProps };
