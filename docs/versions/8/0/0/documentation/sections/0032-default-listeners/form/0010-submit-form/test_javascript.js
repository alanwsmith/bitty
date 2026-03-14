export const b = {};

export function signal_3B25A_v1(ev, __, el) {
  if (ev.type === "submit") {
    el.innerHTML = b.time();
    ev.preventDefault();
  }
}
