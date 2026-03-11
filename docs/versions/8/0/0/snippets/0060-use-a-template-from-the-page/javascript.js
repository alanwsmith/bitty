export const b = {};

export function snippet(_, __, el) {
  const output = b.render(b.template["example"]);
  el.replaceWith(output);
}
