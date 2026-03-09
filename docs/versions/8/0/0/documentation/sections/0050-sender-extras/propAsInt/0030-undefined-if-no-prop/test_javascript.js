export const bitty = {};

export function signal_94AD1_v1(_, sender, el) {
  if (sender.propAsInt("key") === undefined) {
    el.innerHTML = bitty.time();
  }
}
