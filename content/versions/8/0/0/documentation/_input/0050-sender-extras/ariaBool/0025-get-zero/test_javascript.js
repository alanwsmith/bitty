export const b = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.ariaBool("label") === false) {
    el.innerHTML = b.time();
  }
}
