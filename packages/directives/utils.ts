export const getStyle = (el: Element, prop: any) => {
  return getComputedStyle(el, null)[prop];
};
