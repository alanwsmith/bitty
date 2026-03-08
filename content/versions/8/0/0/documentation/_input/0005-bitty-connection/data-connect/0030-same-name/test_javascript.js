export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  /************************************************
   * This function receives the initial
   * `$_SIGNAL_` then triggers `$_SIGNAL2_`
   * which is unique to this module.
   ************************************************/
  bitty.trigger("$_SIGNAL2_");
}

export function $_SIGNAL2_(_, __, el) {
  el.innerHTML = bitty.time();
}
