import { App } from "vue";
import cInput from "./cInput";
import cForm from "./cForm";
import cFormItem from "./cFormItem/index";
import cButton from "./cButton";
import cMenu from "./cMenu";
import cTabs from "./cTabs";
import cTabPane from "./cTabPane";
import cAutoComplete from "./cAutoComplete/cAutoComplete";

const components = [
  cInput,
  cForm,
  cFormItem,
  cButton,
  cMenu,
  cTabPane,
  cTabs,
  cAutoComplete,
];

export {
  cInput,
  cForm,
  cFormItem,
  cButton,
  cMenu,
  cTabPane,
  cTabs,
  cAutoComplete,
};

export default function (app: App) {
  components.forEach((item) => {
    app.component(item.name, item);
  });
}
