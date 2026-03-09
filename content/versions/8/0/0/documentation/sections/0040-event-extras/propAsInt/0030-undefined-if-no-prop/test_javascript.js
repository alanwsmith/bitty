export const bitty = {};

export function signal_6CF47_v1(ev, __, el) {
  if (ev.propAsInt("key") === undefined) {
    el.innerHTML = bitty.time();
  }
}
