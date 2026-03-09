export const bitty = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.propAsInt("key") === undefined) {
    el.innerHTML = bitty.time();
  }
}
