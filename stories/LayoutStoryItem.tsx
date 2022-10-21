import { defineComponent } from "vue";

const LayoutStoryItem = defineComponent({
  props: {
    title: {
      type: String,
    }
  },
  setup(props, ctx) {
    return () => {
      return (
        <div style={{  margin: "0 auto", textAlign: "center" }}>
          <p style={{ background: "#fff", textAlign: "left", padding: "5px", margin: 0 }}>{props?.title}</p>
          {ctx.slots?.default?.()}
        </div>
      )
    }
  },
});

export default LayoutStoryItem;