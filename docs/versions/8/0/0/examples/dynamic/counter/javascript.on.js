export const b = {};

export function up(_, __, el) {
  el.innerHTML = el.innerHTMLAsInt() + 1;
}