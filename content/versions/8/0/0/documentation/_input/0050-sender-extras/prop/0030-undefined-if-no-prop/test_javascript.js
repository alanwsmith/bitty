export const bitty = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.prop("key") === undefined) {
    el.innerHTML = bitty.time();
  }
}
