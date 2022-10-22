import { defineComponent } from "vue";

const LayoutStory = defineComponent({
  setup(props, ctx) {
    return () => {
      return (
        <div style={{ width: "375px", margin: "0 auto", minHeight: "600px" ,maxHeight: "800px", background: "#dedede", padding: "10px" }}>
          {ctx.slots?.default?.()}
        </div>
      )
    }
  },
});

export default LayoutStory;