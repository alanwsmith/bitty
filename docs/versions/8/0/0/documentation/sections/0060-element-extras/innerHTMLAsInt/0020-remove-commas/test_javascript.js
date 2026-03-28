export const b = {};

export function signal_43120_v1(_, __, el) {
  if (el.innerHTMLAsInt() === 9000) {
    b.trigger("signal_43120_v2");
  }
}

export function signal_43120_v2(_, __, el) {
  el.innerHTML = b.time();
}
