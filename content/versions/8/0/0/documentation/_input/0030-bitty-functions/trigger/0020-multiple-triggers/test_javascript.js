export const b = {};

export function $_SIGNAL_(_, __, ___) {
  b.trigger("$_SIGNAL2_ $_SIGNAL3_");
}

export function $_SIGNAL2_(_, __, el) {
  el.innerHTML = b.time();
}

export function $_SIGNAL3_(_, __, el) {
  el.innerHTML = b.time();
}
