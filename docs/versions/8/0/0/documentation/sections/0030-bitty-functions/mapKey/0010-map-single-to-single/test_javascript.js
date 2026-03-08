export const bitty = {};

export function setKey_signal_07868_alfa() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  bitty.mapKey("q", "signal_07868_alfa");
}

export function signal_07868_alfa(_, __, el) {
  el.innerHTML = bitty.time();
}
