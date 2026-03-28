export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  el.toggleProp("key");
  if (el.propAsBool("key") === false) {
    el.innerHTML = b.time();
  }
}
