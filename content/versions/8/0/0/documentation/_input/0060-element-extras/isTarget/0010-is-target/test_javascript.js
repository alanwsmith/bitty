export const bitty = {};

export function $_SIGNAL_(_, __, el) {
  if (el.isTarget === true) {
    bitty.trigger("$_SIGNAL2_");
  }
}

export function $_SIGNAL2_(_, __, el) {
  el.innerHTML = bitty.time();
}
