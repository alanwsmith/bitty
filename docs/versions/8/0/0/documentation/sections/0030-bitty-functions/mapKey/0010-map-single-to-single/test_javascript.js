export const bitty = {};

export function setKey_signal_07868() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  bitty.mapKey("q", "signal_07868");
}

export function signal_07868(_, __, el) {
  el.innerHTML = bitty.localTimestamp();
}
