export const b = {};

export function signal_11E9A_v1(_, __, el) {
  if (el.valueInt() === 100) {
    b.trigger("signal_11E9A_v2");
  }
}

export function signal_11E9A_v2(_, __, el) {
  el.innerHTML = b.time();
}
