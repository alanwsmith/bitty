export const b = {};

export function $_SIGNAL_(ev, __, el) {
  if (ev.propAsInt("key") === undefined) {
    el.innerHTML = b.time();
  }
}
