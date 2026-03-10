export const b = {};

export function $_SIGNAL_(ev, __, el) {
  if (ev.prop("key") === undefined) {
    el.innerHTML = b.time();
  }
}
