export const bitty = {};

export function $_SIGNAL_(_, __, el) {
  if (el.propAsInt("key") === 100) {
    el.innerHTML = bitty.time();
  }
}
