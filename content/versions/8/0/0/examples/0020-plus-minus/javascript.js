export const bitty = {};

let currentValue = 0;

export function initPlusMinus(_, __, el) {
  el.innerHTML = currentValue;
}

export function minus(_, __, el) {
  currentValue -= 1;
  el.innerHTML = currentValue;
}

export function plus(_, __, el) {
  currentValue += 1;
  el.innerHTML = currentValue;
}
