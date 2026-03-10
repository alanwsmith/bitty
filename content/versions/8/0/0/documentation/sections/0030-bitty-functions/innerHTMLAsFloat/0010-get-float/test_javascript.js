export const b = {};

export function signal_9C498_v1(_, __, el) {
  if (el.innerHTMLAsFloat === 1.1) {
    b.trigger("signal_9C498_v2");
  }
}

export function signal_9C498_v2(_, __, el) {
  el.innerHTML = b.time();
}
