export const b = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.valFloat() === 1.1) {
    el.innerHTML = b.time();
  }
}
