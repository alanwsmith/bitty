export const b = {};

export function signal_02E47_v1(ev, sender, el) {
  if (ev.valAsInt === 100) {
    el.innerHTML = b.time();
  }
}
