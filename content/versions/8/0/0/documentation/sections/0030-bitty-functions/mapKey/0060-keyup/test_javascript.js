export const bitty = {};

export function setKey_signal_78314_alfa() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  bitty.mapKey("b", "signal_78314_alfa", [], { listener: "keyup" });
}

export function signal_78314_alfa(_, __, el) {
  el.innerHTML = bitty.time();
}
