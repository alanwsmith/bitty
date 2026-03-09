export const bitty = {};

export function signal_DAC38_alfa(_, __, el) {
  if (el.isSender === true) {
    bitty.trigger("signal_DAC38_bravo");
  }
}

export function signal_DAC38_bravo(_, __, el) {
  el.innerHTML = bitty.time();
}
