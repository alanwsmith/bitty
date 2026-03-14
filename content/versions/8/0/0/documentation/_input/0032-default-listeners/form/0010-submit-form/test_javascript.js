export const b = {};

export function $_SIGNAL_(ev, __, el) {
  if (ev.type === "submit") {
    el.innerHTML = b.time();
    ev.preventDefault();
  }
}
