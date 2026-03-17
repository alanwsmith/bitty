export const b = {};

export function signal_C5C24_v1(_, __, el) {
  if (el.valFloat() === 1.1) {
    b.trigger("signal_C5C24_v2");
  }
}

export function signal_C5C24_v2(_, __, el) {
  el.innerHTML = b.time();
}
