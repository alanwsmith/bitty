export const bitty = {};

export function signal_6CF47_alfa(ev, __, el) {
  if (ev.propAsInt("key") === undefined) {
    el.innerHTML = bitty.time();
  }
}
