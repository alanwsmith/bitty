export const b = {};

export function $_SIGNAL_(ev, __, el) {
  if (ev.propAsFloat("key") === 2.2) {
    el.innerHTML = b.time();
  }
}
