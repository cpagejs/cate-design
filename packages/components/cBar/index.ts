import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cBar from "./cBar";

cBar.install = (app: App) => {
  app.component(cBar.name as string, cBar);
};

export default cBar as SFCWithInstall<typeof cBar>;
