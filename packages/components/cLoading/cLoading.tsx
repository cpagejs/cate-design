/** 导航条--返回
 * @author 夏小宅
 */
import { defineComponent } from "vue";
import { loadingProps } from "./types";
import "./index.scss";

const props = loadingProps();
export default defineComponent({
  name: "cHeaderBack",
  props: props,
  setup(props, ctx) {
    const colorStyle = { backgroundColor: props.color };
    const borderStyle = {
      borderLeftColor: props.huanLeftColor,
      borderRightColor: props.huanRightColor,
    };
    return () => {
      return (
        <>
          {props.type === "dot" && (
            <div class="c-loading" style={props.styleLoading}>
              <div class="loading-container container1">
                <div class="circle1" style={colorStyle}></div>
                <div class="circle2" style={colorStyle}></div>
                <div class="circle3" style={colorStyle}></div>
                <div class="circle4" style={colorStyle}></div>
              </div>
              <div class="loading-container container2">
                <div class="circle1" style={colorStyle}></div>
                <div class="circle2" style={colorStyle}></div>
                <div class="circle3" style={colorStyle}></div>
                <div class="circle4" style={colorStyle}></div>
              </div>
              <div class="loading-container container3">
                <div class="circle1" style={colorStyle}></div>
                <div class="circle2" style={colorStyle}></div>
                <div class="circle3" style={colorStyle}></div>
                <div class="circle4" style={colorStyle}></div>
              </div>
            </div>
          )}
          {props.type === "huan" && (
            <div class="c-loading c-loading-huan">
              <div style={borderStyle}></div>
              <div style={borderStyle}></div>
              <div style={borderStyle}></div>
              <div style={borderStyle}></div>
            </div>
          )}
        </>
      );
    };
  },
});
