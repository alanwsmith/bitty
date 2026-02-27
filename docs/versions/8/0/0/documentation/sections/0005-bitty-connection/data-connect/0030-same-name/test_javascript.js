export const bitty = {};

export function signal_9E5B8(ev, sender, el) {
  bitty.trigger("signal_9E5B8_2");
}

export function signal_9E5B8_2(_, __, el) {
  el.innerHTML = bitty.localTimestamp();
}
