export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  if (ev.valAsFloat === 1.1) {
    el.innerHTML = b.time();
  }
}
