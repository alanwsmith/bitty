export const b = {};

export function signal_5D0B4_v1(ev, sender, el) {
  if (sender.ariaBool("checked") === true) {
    el.innerHTML = b.time();
  }
}
