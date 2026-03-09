export const bitty = {};

export function signal_F1309_v1(_, __, el) {
  if (el.val === "Input F1309_v1") {
    bitty.trigger("signal_F1309_v2");
  }
}

export function signal_F1309_v2(_, __, el) {
  el.innerHTML = bitty.time();
}
