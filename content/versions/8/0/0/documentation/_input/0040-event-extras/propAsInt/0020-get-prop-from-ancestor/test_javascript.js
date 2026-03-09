export const bitty = {};

export function $_SIGNAL_(ev, __, el) {
  if (ev.propAsInt("key") === 200) {
    el.innerHTML = bitty.time();
  }
}
