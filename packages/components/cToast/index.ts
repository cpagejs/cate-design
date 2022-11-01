import { App, createVNode, render } from "vue";
import { SFCWithInstall } from "../utils/types";
import cToast from "./cToast";

cToast.install = (app: App) => {
  app.component(cToast.name, cToast);
};

interface IToastConfig {
  msg: string,
  delay?: number,
  showMask?: boolean,
  onEnd?: () => void
}
export function useToast({msg, delay, showMask=false, onEnd}: IToastConfig) {
  const vm = createVNode(cToast, { msg, delay, showMask, onEnd });
  const container = document.createElement("div");
  render(vm, container);
  document.body.append(container);
  vm.component?.exposed?.open();

  return vm;
}

export default cToast as SFCWithInstall<typeof cToast>;