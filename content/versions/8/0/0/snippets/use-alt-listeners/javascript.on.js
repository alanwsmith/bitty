export const b = {};

export function snippet(_, __, el) {
  el.innerHTML = `got mouseover at ${b.time()}`;
}
