export const bitty = {};

export function $_SIGNAL_(ev, __, el) {
  if (ev.propAsInt("key") === undefined) {
    el.innerHTML = bitty.time();
  }
}
