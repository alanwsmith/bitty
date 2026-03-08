export const bitty = {};

export function signal_9E5B8_alfa(ev, sender, el) {
  /************************************************
   * This function receives the initial
   * `signal_9E5B8_alfa` then triggers `signal_9E5B8_bravo`
   * which is unique to this module.
   ************************************************/
  bitty.trigger("signal_9E5B8_bravo");
}

export function signal_9E5B8_bravo(_, __, el) {
  el.innerHTML = bitty.time();
}
