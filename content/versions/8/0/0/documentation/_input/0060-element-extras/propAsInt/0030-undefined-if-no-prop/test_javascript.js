export const bitty = {};

export function $_SIGNAL_(_, __, el) {
  if (sender.propAsInt("key") === undefined) {
    el.innerHTML = bitty.time();
  }
}
