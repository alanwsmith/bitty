export const b = {};

export function $_SIGNAL_(ev, __, el) {
  if (ev.propBool("key") === true) {
    el.innerHTML = b.time();
  }
}
