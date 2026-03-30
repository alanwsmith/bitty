export const b = {};

export function count(ev, sender, el) {
  el.innerHTML = el.innerHTMLAsInt() + 1;
}
