export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  el.innerHTML = bitty.tee(bitty.time());
}
