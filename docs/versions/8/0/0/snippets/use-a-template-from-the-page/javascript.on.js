export const b = {};

export function snippet(_, __, el) {
  el.replaceWith(b.render("example"));
}