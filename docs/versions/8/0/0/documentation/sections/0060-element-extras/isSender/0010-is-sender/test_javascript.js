export const bitty = {};

export function signal_DAC38_v1(_, __, el) {
  if (el.isSender === true) {
    bitty.trigger("signal_DAC38_v2");
  }
}

export function signal_DAC38_v2(_, __, el) {
  el.innerHTML = bitty.time();
}
