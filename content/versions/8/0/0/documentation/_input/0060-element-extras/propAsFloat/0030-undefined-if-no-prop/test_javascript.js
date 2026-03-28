export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.prop("key") === undefined) {
    el.innerHTML = b.time();
  }
}
