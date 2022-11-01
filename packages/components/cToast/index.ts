import { App, createVNode, render } from "vue";
import { SFCWithInstall } from "../utils/types";
import cToast from "./cToast";

cToast.install = (app: App) => {
  app.component(cToast.name, cToast);
};

interface IToastConfig {
  msg: string,
  delay?: number
}
export function useToast({msg, delay}: IToastConfig) {
  const vm = createVNode(cToast, { msg, delay });
  const container = document.createElement("div");
  render(vm, container);
  document.body.append(container);
  vm.component?.exposed?.open();
}

export default cToast as SFCWithInstall<typeof cToast>;