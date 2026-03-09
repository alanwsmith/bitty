export const bitty = {};

export function signal_C20BB_v1(_, sender, el) {
  if (sender.propAsFloat("key") === 1.1) {
    el.innerHTML = bitty.time();
  }
}
