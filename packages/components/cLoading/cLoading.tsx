/** 导航条--返回
 * @author cpagejs
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
            <div
              className="c-loading"
              style={props.styleLoading}
            >
              <div className="loading-container container1">
                <div
                  className="circle1"
                  style={colorStyle}
                ></div>
                <div
                  className="circle2"
                  style={colorStyle}
                ></div>
                <div
                  className="circle3"
                  style={colorStyle}
                ></div>
                <div
                  className="circle4"
                  style={colorStyle}
                ></div>
              </div>
              <div className="loading-container container2">
                <div
                  className="circle1"
                  style={colorStyle}
                ></div>
                <div
                  className="circle2"
                  style={colorStyle}
                ></div>
                <div
                  className="circle3"
                  style={colorStyle}
                ></div>
                <div
                  className="circle4"
                  style={colorStyle}
                ></div>
              </div>
              <div className="loading-container container3">
                <div
                  className="circle1"
                  style={colorStyle}
                ></div>
                <div
                  className="circle2"
                  style={colorStyle}
                ></div>
                <div
                  className="circle3"
                  style={colorStyle}
                ></div>
                <div
                  className="circle4"
                  style={colorStyle}
                ></div>
              </div>
            </div>
          )}
          {props.type === "huan" && (
            <div className="c-loading c-loading-huan">
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
