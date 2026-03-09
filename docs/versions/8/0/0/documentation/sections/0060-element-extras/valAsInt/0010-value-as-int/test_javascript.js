export const bitty = {};

export function signal_9D58D_v1(_, __, el) {
  if (el.valAsInt === 100) {
    bitty.trigger("signal_9D58D_v2");
  }
}

export function signal_9D58D_v2(_, __, el) {
  el.innerHTML = bitty.time();
}
