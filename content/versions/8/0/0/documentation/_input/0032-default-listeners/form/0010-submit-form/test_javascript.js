export const b = {};

export function $_SIGNAL_(ev, __, el) {
  console.log(ev);
  if (ev.type === "submit") {
    el.innerHTML = b.time();
    ev.preventDefault();
  }
}
