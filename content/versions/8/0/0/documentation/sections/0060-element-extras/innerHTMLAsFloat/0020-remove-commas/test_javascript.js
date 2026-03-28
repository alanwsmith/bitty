export const b = {};

export function signal_69365_v1(_, __, el) {
  if (el.innerHTMLFloat() === 9000.1) {
    b.trigger("signal_69365_v2");
  }
}

export function signal_69365_v2(_, __, el) {
  el.innerHTML = b.time();
}
