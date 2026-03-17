export const b = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.valAsInt === 100) {
    el.innerHTML = b.time();
  }
}
