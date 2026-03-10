export const b = {
  init: "init_9EAED_v1",
};

export function init_9EAED_v1() {
  b.mapKey("/", "signal_9EAED_v1", [], { preventDefault: false });
}

export function signal_9EAED_v1(_, __, el) {
  el.innerHTML = b.time();
}
