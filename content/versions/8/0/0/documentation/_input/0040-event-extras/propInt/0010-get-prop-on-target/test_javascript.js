export const b = {};

export function $_SIGNAL_(ev, __, el) {
  if (ev.propInt("key") === 100) {
    el.innerHTML = b.time();
  }
}
