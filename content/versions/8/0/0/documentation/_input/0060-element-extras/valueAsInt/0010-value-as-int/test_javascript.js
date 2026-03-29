export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.valueAsInt() === 100) {
    b.trigger("$_SIGNAL2_");
  }
}

export function $_SIGNAL2_(_, __, el) {
  el.innerHTML = b.time();
}
