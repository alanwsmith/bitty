export const b = {};

export function $_SIGNAL_(ev, __, el) {
  if (ev.propAsFloat("key") === 1.1) {
    el.innerHTML = b.time();
  }
}
