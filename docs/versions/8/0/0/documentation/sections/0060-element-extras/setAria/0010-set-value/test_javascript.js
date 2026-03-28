export const b = {};

export function signal_E12AF_v1(ev, sender, el) {
  el.setAria("hidden", "false");
  if (el.ariaAsBool("hidden") === false) {
    el.innerHTML = b.time();
  }
}
