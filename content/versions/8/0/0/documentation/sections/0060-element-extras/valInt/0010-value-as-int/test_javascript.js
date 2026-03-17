export const b = {};

export function signal_2FC46_v1(_, __, el) {
  if (el.valInt === 100) {
    b.trigger("signal_2FC46_v2");
  }
}

export function signal_2FC46_v2(_, __, el) {
  el.innerHTML = b.time();
}
