export const b = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.ariaBool("label") === true) {
    el.innerHTML = b.time();
  }
}
