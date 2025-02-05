import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cCheckBox from "./cCheckBox";

cCheckBox.install = (app: App) => {
  app.component(cCheckBox.name as string, cCheckBox);
};

export default cCheckBox as SFCWithInstall<typeof cCheckBox>;
