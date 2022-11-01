import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cCheckBox from "./cCheckBox";

cCheckBox.install = (app: App) => {
  app.component(cCheckBox.name, cCheckBox);
};

export default cCheckBox as SFCWithInstall<typeof cCheckBox>;
