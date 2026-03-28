export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  el.setAria("hidden", "false");
  if (el.ariaAsBool("hidden") === false) {
    el.innerHTML = b.time();
  }
}
