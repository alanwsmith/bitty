export const b = {};

export function $_SIGNAL_(_, __, ___) {
  b.trigger("$_SIGNAL2_");
}

export function $_SIGNAL2_(_, __, el) {
  if (el.isSender === false) {
    el.innerHTML = b.time();
  }
}
