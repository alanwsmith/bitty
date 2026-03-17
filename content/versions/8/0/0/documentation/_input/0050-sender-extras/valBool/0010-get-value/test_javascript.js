export const b = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.valBool() === true) {
    el.innerHTML = b.time();
  }
}
