export const bitty = {};

export function signal_4E815_v1(_, __, el) {
  if (el.valAsFloat === 1.1) {
    bitty.trigger("signal_4E815_v2");
  }
}

export function signal_4E815_v2(_, __, el) {
  el.innerHTML = bitty.time();
}
