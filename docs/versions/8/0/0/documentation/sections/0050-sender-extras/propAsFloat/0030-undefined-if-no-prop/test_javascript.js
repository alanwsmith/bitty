export const b = {};

export function signal_E7FEE_v1(_, sender, el) {
  if (sender.prop("key") === undefined) {
    el.innerHTML = b.time();
  }
}
