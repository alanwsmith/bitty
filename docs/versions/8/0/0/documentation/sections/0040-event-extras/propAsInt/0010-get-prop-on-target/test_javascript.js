export const b = {};

export function signal_A317A_v1(ev, __, el) {
  if (ev.propAsInt("key") === 100) {
    el.innerHTML = b.time();
  }
}
