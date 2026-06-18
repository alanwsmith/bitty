export const b = {};

export function exampleSignal(_, __, el) {
  el.innerHTML = el.innerHTMLAsInt() + 1;
}