export const b = {};

export function signal_0F65A_v1(_, __, el) {
  if (el.innerHTMLAsInt === 9000) {
    b.trigger("signal_0F65A_v2");
  }
}

export function signal_0F65A_v2(_, __, el) {
  el.innerHTML = b.time();
}
