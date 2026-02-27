export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  bitty.trigger("$_SIGNAL2_");
}

export function $_SIGNAL2_(_, __, el) {
  el.innerHTML = bitty.localTimestamp();
}
