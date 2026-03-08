export const bitty = {};

export function $_SIGNAL_(_, __, ___) {
  bitty.trigger("$_SIGNAL2_ $_SIGNAL3_");
}

export function $_SIGNAL2_(_, __, el) {
  el.innerHTML = bitty.time();
}

export function $_SIGNAL3_(_, __, el) {
  el.innerHTML = bitty.time();
}
