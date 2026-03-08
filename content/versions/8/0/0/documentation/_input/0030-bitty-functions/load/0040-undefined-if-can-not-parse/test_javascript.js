export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  const result = bitty.load("invalid_$_SIGNAL_");
  if (result === undefined) {
    el.innerHTML = bitty.time();
  }
}
