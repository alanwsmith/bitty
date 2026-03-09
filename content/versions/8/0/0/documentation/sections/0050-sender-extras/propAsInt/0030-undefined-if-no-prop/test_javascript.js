export const bitty = {};

export function signal_94AD1_alfa(_, sender, el) {
  if (sender.propAsInt("key") === undefined) {
    el.innerHTML = bitty.time();
  }
}
