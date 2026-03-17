export const b = {};

export function $_SIGNAL_(ev, __, el) {
  if (ev.ariaInt("label") === 10) {
    el.innerHTML = b.time();
  }
}
