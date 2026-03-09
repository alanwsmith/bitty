export const bitty = {};

export function $_SIGNAL_(_, __, el) {
  if (sender.valAsInt() === 100) {
    el.innerHTML = bitty.time();
  }
}
