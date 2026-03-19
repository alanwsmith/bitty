export const b = {};

export function doubleInt(_, __, el) {
  el.innerHTML = el.innerHTMLInt() * 2;
}

export function doubleFloat(_, __, el) {
  el.innerHTML = el.innerHTMLFloat() * 2;
}