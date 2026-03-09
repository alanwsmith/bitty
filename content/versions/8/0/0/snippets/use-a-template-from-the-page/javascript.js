export const bitty = {};

export function snippet(_, __, el) {
  const output = bitty.render(bitty.template["example"]);
  el.replaceWith(output);
}
