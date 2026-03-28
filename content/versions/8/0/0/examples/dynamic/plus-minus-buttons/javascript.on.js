export const b = {};

export function down(_, __, el) {
  el.innerHTML = el.innerHTMLAsInt() - 1;
}

export function up(_, __, el) {
  el.innerHTML = el.innerHTMLAsInt() + 1;
}
