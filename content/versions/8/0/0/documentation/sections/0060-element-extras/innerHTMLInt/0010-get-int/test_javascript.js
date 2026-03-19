export const b = {};

export function signal_54FAD_v1(_, __, el) {
  if (el.innerHTMLInt() === 100) {
    b.trigger("signal_54FAD_v2");
  }
}

export function signal_54FAD_v2(_, __, el) {
  el.innerHTML = b.time();
}
