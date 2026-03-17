export const b = {};

export function signal_055F2_v1(ev, __, el) {
  if (ev.propInt("key") === 100) {
    el.innerHTML = b.time();
  }
}
