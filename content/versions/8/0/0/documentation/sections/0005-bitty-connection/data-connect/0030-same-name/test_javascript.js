export const bitty = {};

export function signal_9E5B8(ev, sender, el) {
  /************************************************
   * This function receives the initial
   * `signal_9E5B8` then triggers `signal_9E5B8_2`
   * which is unique to this module.
   ************************************************/
  bitty.trigger("signal_9E5B8_2");
}

export function signal_9E5B8_2(_, __, el) {
  el.innerHTML = bitty.time();
}
