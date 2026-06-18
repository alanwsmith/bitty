export const b = {};

export function exampleSignal(_, __, el) {
  el.innerHTML = b.time();
}
