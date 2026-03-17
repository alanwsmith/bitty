export const b = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.prop("key") === undefined) {
    el.innerHTML = b.time();
  }
}
