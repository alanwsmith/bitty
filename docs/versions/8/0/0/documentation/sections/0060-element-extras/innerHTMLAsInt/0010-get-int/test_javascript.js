export const b = {};

export function signal_C7219_v1(_, __, el) {
  if (el.innerHTMLAsInt() === 100) {
    b.trigger("signal_C7219_v2");
  }
}

export function signal_C7219_v2(_, __, el) {
  el.innerHTML = b.time();
}
