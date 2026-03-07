export const bitty = {};

export function setKey() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  bitty.mapKey("t", "signal_273EF", ["invalidModKey"]);
}

export function signal_273EF(_, __, el) {
  el.innerHTML = bitty.localTimestamp();
}
