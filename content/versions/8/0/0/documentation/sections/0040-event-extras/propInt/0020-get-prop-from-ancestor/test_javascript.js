export const b = {};

export function signal_07474_v1(ev, __, el) {
  if (ev.propInt("key") === 200) {
    el.innerHTML = b.time();
  }
}
