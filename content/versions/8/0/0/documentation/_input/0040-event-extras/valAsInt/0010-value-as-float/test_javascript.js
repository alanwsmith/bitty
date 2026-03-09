export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  if (ev.valAsInt() === 100) {
    el.innerHTML = bitty.time();
  }
}
