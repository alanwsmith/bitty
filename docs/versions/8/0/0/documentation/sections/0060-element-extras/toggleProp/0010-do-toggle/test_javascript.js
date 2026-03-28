export const b = {};

export function signal_599B9_v1(ev, sender, el) {
  el.toggleProp("key");
  if (el.propAsBool("key") === false) {
    el.innerHTML = b.time();
  }
}
