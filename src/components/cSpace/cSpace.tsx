import { defineComponent } from "vue";

export default defineComponent({
  name: "cSpace",
  setup(props, ctx) {
    return () => {
      return (
        <>
          <p style={{ height: "20px" }}></p>
        </>
      );
    };
  },
});
