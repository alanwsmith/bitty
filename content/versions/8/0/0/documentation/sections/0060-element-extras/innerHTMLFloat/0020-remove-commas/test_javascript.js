export const b = {};

export function signal_E3A85_v1(_, __, el) {
  if (el.innerHTMLFloat() === 9000.1) {
    b.trigger("signal_E3A85_v2");
  }
}

export function signal_E3A85_v2(_, __, el) {
  el.innerHTML = b.time();
}
