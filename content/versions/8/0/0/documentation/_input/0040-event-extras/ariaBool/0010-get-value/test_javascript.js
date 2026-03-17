export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  if (ev.ariaBool("label") === true) {
    el.innerHTML = b.time();
  }
}
