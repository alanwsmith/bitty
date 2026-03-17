export const b = {};

export function signal_B3AB5_v1(_, sender, el) {
  if (sender.valBool() === true) {
    el.innerHTML = b.time();
  }
}
