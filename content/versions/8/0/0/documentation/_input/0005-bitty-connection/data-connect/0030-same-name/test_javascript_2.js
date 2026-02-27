export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  bitty.trigger("$_SIGNAL3_");
}

export function $_SIGNAL3_(_, __, el) {
  el.innerHTML = bitty.localTimestamp();
}
