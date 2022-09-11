import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cSlide from "./cSlide";

cSlide.install = (app: App) => {
  app.component(cSlide.name, cSlide);
};

export default cSlide as SFCWithInstall<typeof cSlide>;