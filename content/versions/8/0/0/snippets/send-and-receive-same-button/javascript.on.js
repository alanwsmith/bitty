export const b = {};

export function snippet(_, __, el) {
  el.innerHTML = el.innerHTMLInt() + 1;
}
