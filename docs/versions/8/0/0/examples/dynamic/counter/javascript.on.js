export const b = {};

export function up(_, __, el) {
  el.innerHTML = el.innerHTMLInt() + 1;
}