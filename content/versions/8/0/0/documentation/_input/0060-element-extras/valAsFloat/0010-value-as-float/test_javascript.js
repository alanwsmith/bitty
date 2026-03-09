export const bitty = {};

export function $_SIGNAL_(_, __, el) {
  if (el.valAsFloat === 1.1) {
    el.innerHTML = bitty.time();
  }
}
