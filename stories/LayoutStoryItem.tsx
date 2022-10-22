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
        <div style={{  margin: "0 0 20px 0", textAlign: "center" }}>
          <p style={{ background: "#fff", textAlign: "left", padding: "5px", marginBottom: "5px" }}>{props?.title}</p>
          {ctx.slots?.default?.()}
        </div>
      )
    }
  },
});

export default LayoutStoryItem;