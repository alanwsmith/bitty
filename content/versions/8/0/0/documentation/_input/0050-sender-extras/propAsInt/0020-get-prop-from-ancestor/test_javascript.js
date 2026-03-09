export const bitty = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.propAsInt("key") === 200) {
    el.innerHTML = bitty.time();
  }
}
