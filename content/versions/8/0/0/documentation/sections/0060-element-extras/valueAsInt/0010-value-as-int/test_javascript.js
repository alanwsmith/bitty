export const b = {};

export function signal_8B4F2_v1(_, __, el) {
  if (el.valueInt() === 100) {
    b.trigger("signal_8B4F2_v2");
  }
}

export function signal_8B4F2_v2(_, __, el) {
  el.innerHTML = b.time();
}
