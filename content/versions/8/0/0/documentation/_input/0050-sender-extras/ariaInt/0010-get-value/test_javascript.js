export const b = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.ariaInt("label") === 10) {
    el.innerHTML = b.time();
  }
}
