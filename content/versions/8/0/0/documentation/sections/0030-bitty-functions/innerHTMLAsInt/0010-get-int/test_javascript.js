export const b = {};

export function signal_B6F1E_v1(_, __, el) {
  if (el.innerHTMLAsInt === 100) {
    b.trigger("signal_B6F1E_v2");
  }
}

export function signal_B6F1E_v2(_, __, el) {
  el.innerHTML = b.time();
}
