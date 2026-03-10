export const b = {};

export function snippet(_, __, el) {
  const value = parseInt(el.innerHTML);
  el.innerHTML = value + 1;
}
