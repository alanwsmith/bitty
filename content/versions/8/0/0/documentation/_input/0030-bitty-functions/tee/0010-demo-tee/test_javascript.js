export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  el.innerHTML = b.tee(b.time());
}
