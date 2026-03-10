export const b = {};

let count = 0;

export function plusOne(_, __, el) {
  count += 1;
  el.innerHTML = count;
}
