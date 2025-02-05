import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cInput from "./cInput";

cInput.install = (app: App) => {
  app.component(cInput.name as string, cInput);
};

export default cInput as SFCWithInstall<typeof cInput>;
