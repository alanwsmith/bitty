export const b = {};

export function signal_4E481_v1(_, __, el) {
  if (el.innerHTMLAsBool() === true) {
    b.trigger("signal_4E481_v2");
  }
}

export function signal_4E481_v2(_, __, el) {
  el.innerHTML = b.time();
}
