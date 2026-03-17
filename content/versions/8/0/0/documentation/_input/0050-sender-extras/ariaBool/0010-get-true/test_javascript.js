export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  if (sender.ariaBool("checked") === true) {
    el.innerHTML = b.time();
  }
}
