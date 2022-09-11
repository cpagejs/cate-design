import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cConfirm from "./cConfirm.vue";

cConfirm.install = (app: App) => {
  app.component(cConfirm.name, cConfirm);
};

export default cConfirm as SFCWithInstall<typeof cConfirm>;