export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  if (ev.valInt === 100) {
    el.innerHTML = b.time();
  }
}
