export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  el.toggleProp("key");
  if (el.propBool("key") === false) {
    el.innerHTML = b.time();
  }
}
