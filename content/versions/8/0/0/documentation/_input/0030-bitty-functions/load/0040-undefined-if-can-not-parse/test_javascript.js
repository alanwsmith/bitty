export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  const result = bitty.loadData("invalid_$_SIGNAL_");
  if (result === undefined) {
    el.innerHTML = bitty.time();
  }
}
