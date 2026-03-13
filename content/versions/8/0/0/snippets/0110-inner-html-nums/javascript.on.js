export const b = {};

export function doubleInt(_, __, el) {
  el.innerHTML = el.innerHTMLAsInt * 2;
}

export function doubleFloat(_, __, el) {
  el.innerHTML = el.innerHTMLAsFloat * 2;
}
