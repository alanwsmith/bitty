export const b = {};

export function signal_599B9_v1(ev, sender, el) {
  el.toggleProp("key");
  if (el.propBool("key") === false) {
    el.innerHTML = b.time();
  }
}
