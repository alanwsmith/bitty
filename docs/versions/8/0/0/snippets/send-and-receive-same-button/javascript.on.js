export const b = {};

export function snippet(_, __, el) {
  el.innerHTML = el.innerHTMLAsInt() + 1;
}