export const b = {};

export function signal_5A091_v1(_, sender, el) {
  sender.setAria("checked", true);
  if (sender.ariaBool("checked") === true) {
    el.innerHTML = b.time();
  }
}
