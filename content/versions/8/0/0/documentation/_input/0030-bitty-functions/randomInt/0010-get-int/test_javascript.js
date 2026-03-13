export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  const int = b.randomInt(2, 10);
  if (int > 1) {
    el.innerHTML = b.time();
  }
}
