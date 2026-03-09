export const bitty = {};

export function setKey() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  bitty.mapKey("r", "signal_6B685_alfa", ["CTRL"]);
}

export function signal_6B685_alfa(_, __, el) {
  el.innerHTML = bitty.time();
}
