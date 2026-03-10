export const bitty = {};

export function initFontSize(_, __, el) {
  el.value = 1;
  bitty.setCSS("--custom-size", `1rem`);
}

export function setSize(ev, __, ___) {
  window.requestAnimationFrame(() => {
    bitty.setCSS("--custom-size", `${ev.valAsFloat}rem`);
  });
}
