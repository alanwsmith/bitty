export const b = {
  init: "init_DE6CE_v1",
};

export function init_DE6CE_v1() {
  b.mapKey("e", "signal_DE6CE_v1", ["ctrlKey"]);
}

export function signal_DE6CE_v1(_, __, el) {
  el.innerHTML = b.time();
}
