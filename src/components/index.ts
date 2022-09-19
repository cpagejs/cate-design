import { App } from "vue";
import cBar from "./cBar";
import cButton from "./cButton";
import cButtonFooter from "./cButtonFooter";
import cCircle from "./cCircle";
import cConfirm from "./cConfirm";
import cHeaderBack from "./cHeaderBack";
import cInput from "./cInput";
import cInputPassword from "./cInputPassword";
import cCheckBox from "./cCheckBox";
import cSwitch from "./cSwitch";
import cItem from "./cItem";
import cLoading from "./cLoading";
import cSlide from "./cSlide";
import cForm from "./cForm";
import cFormItem from "./cFormItem/index";
import cMenu from "./cMenu";
import cMenuItem from "./cMenuItem";
import cSubItem from "./cSubMenu";
import cTabs from "./cTabs";
import cTabItem from "./cTabItem";
import cAutoComplete from "./cAutoComplete";
import cTimeCircle from "./cTimeCircle";
import cTimeOut from "./cTimeOut";
import cTree from "./cTree";

const components = [
  cBar,
  cButton,
  cButtonFooter,
  cCircle,
  cConfirm,
  cHeaderBack,
  cInput,
  cInputPassword,
  cCheckBox,
  cSwitch,
  cItem,
  cLoading,
  cSlide,
  cForm,
  cFormItem,
  cMenu,
  cMenuItem,
  cSubItem,
  cTabs,
  cTabItem,
  cAutoComplete,
  cTimeCircle,
  cTimeOut,
  cTree,
];

export {
  cBar,
  cButton,
  cButtonFooter,
  cCircle,
  cConfirm,
  cHeaderBack,
  cInput,
  cInputPassword,
  cCheckBox,
  cSwitch,
  cItem,
  cLoading,
  cSlide,
  cForm,
  cFormItem,
  cMenu,
  cMenuItem,
  cSubItem,
  cTabs,
  cTabItem,
  cAutoComplete,
  cTimeCircle,
  cTimeOut,
  cTree,
};

export default function (app: App) {
  components.forEach((item) => {
    app.component(item.name, item);
  });
}
