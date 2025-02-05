import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cSpace from "./cSpace";

cSpace.install = (app: App) => {
  app.component(cSpace.name as string, cSpace);
};

export default cSpace as SFCWithInstall<typeof cSpace>;
