export const bitty = {};

export function signal_A317A_alfa(ev, __, el) {
  if (ev.propAsInt("key") === 100) {
    el.innerHTML = bitty.time();
  }
}
