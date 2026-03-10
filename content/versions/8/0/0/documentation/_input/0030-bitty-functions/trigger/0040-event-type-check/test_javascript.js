export const b = {};

export function $_SIGNAL_(_, __, ___) {
  b.trigger("$_SIGNAL2_");
}

export function $_SIGNAL2_(ev, __, el) {
  if (ev.type === "bittytrigger") {
    el.innerHTML = b.time();
  }
}
