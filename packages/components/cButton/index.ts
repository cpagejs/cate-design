import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cButton from "./cButton";

cButton.install = (app: App) => {
  app.component(cButton.name as string, cButton);
};

export default cButton as SFCWithInstall<typeof cButton>;
