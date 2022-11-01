import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cSpace from "./cSpace";

cSpace.install = (app: App) => {
  app.component(cSpace.name, cSpace);
};

export default cSpace as SFCWithInstall<typeof cSpace>;