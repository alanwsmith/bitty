export const b = {};

export function down(_, __, el) {
  el.innerHTML = el.innerHTMLInt() - 1;
}

export function up(_, __, el) {
  el.innerHTML = el.innerHTMLInt() + 1;
}
