export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  el.setAria("hidden", "false");
  if (el.ariaBool("hidden") === false) {
    el.innerHTML = b.time();
  }
}
