export const b = {};

export function signal_D294D_v1(_, __, el) {
  if (el.innerHTMLFloat() === 1.1) {
    b.trigger("signal_D294D_v2");
  }
}

export function signal_D294D_v2(_, __, el) {
  el.innerHTML = b.time();
}
