import { App } from "vue";
import cBar from "./components/cBar";
import cButton from "./components/cButton";
import cButtonFooter from "./components/cButtonFooter";
import cCircle from "./components/cCircle";
import cConfirm from "./components/cConfirm";
import cHeaderBack from "./components/cHeaderBack";
import cInput from "./components/cInput";
import cInputPassword from "./components/cInputPassword";
import cCheckBox from "./components/cCheckBox";
import cSwitch from "./components/cSwitch";
import cItem from "./components/cItem";
import cLoading from "./components/cLoading";
import cSlide from "./components/cSlide";
import cForm from "./components/cForm";
import cFormItem from "./components/cFormItem/index";
import cMenu from "./components/cMenu";
import cMenuItem from "./components/cMenuItem";
import cSubItem from "./components/cSubMenu";
import cTabs from "./components/cTabs";
import cTabItem from "./components/cTabItem";
import cAutoComplete from "./components/cAutoComplete";
import cTimeCircle from "./components/cTimeCircle";
import cTimeOut from "./components/cTimeOut";
import cTree from "./components/cTree";
import cSpace from "./components/cSpace";
import cCard from "./components/cCard";
import cToast, { useToast } from "./components/cToast";

import { useClickOutside } from "./hooks/useClickOutside";
import { useDebounce } from "./hooks/useDebounce";

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
  cSpace,
  cCard,
  cToast,
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
  cSpace,
  cCard,
  cToast,
  useToast,
  useClickOutside,
  useDebounce,
};

export default function (app: App) {
  components.forEach((item) => {
    app.component(item.name, item);
  });
}
