export const b = {};

export function signal_ECF57_v1(_, __, el) {
  if (el.innerHTMLInt() === 9000) {
    b.trigger("signal_ECF57_v2");
  }
}

export function signal_ECF57_v2(_, __, el) {
  el.innerHTML = b.time();
}
