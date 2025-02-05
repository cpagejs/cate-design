import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cSwitch from "./cSwitch.vue";

cSwitch.install = (app: App) => {
  app.component(cSwitch.name as string, cSwitch);
};

export default cSwitch as SFCWithInstall<typeof cSwitch>;
