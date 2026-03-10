export const b = {};

export function signal_F1309_v1(_, __, el) {
  if (el.val === "Input F1309_v1") {
    b.trigger("signal_F1309_v2");
  }
}

export function signal_F1309_v2(_, __, el) {
  el.innerHTML = b.time();
}
