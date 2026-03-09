export const bitty = {};

export function signal_E7FEE_v1(_, sender, el) {
  if (sender.prop("key") === undefined) {
    el.innerHTML = bitty.time();
  }
}
