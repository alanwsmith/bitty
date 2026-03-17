export const b = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.ariaFloat("label") === 1.1) {
    el.innerHTML = b.time();
  }
}
