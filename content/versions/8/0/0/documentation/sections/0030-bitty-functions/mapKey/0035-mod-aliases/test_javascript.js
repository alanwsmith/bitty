export const b = {
  init: "init_6B685_v1",
};

export function init_6B685_v1() {
  b.mapKey("r", "signal_6B685_v1", ["CTRL"]);
}

export function signal_6B685_v1(_, __, el) {
  el.innerHTML = b.time();
}
