export const b = {};

export function signal_13F32_v1(_, __, el) {
  if (el.innerHTMLAsFloat === 9000.1) {
    b.trigger("signal_13F32_v2");
  }
}

export function signal_13F32_v2(_, __, el) {
  el.innerHTML = b.time();
}
