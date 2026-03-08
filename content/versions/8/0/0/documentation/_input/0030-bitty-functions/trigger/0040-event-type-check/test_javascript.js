export const bitty = {};

export function $_SIGNAL_(_, __, ___) {
  bitty.trigger("$_SIGNAL2_");
}

export function $_SIGNAL2_(ev, __, el) {
  if (ev.type === "bittytrigger") {
    el.innerHTML = bitty.time();
  }
}
