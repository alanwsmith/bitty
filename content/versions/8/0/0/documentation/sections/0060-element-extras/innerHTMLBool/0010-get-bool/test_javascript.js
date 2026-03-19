export const b = {};

export function signal_9C183_v1(_, __, el) {
  if (el.innerHTMLBool() === true) {
    b.trigger("signal_9C183_v2");
  }
}

export function signal_9C183_v2(_, __, el) {
  el.innerHTML = b.time();
}
