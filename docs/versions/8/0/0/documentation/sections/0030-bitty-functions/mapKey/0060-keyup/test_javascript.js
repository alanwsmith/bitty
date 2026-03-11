export const b = {
  init: "init_78314_v1",
};

export function init_78314_v1() {
  b.mapKey("b", "signal_78314_v1", [], { listener: "keyup" });
}

export function signal_78314_v1(_, __, el) {
  el.innerHTML = b.time();
}
