export const b = {};

export function getNumber(ev, sender, el) {
  el.innerHTML = b.randomInt(1, 100);
}
