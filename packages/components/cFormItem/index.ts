import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cFormItem from "./cFormItem";

cFormItem.install = (app: App) => {
  app.component(cFormItem.name, cFormItem);
};

export default cFormItem as SFCWithInstall<typeof cFormItem>;
