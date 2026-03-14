export const b = { init: "initFontSize" };

export function initFontSize(_, __, el) {
  el.value = 1;
  b.setCSS("--custom-size", `1rem`);
}

export function setSize(ev, __, ___) {
  window.requestAnimationFrame(() => {
    b.setCSS("--custom-size", `${ev.valAsFloat}rem`);
  });
}