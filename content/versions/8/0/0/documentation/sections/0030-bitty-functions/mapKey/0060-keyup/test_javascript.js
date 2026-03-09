export const bitty = {};

export function setKey_signal_78314_v1() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  bitty.mapKey("b", "signal_78314_v1", [], { listener: "keyup" });
}

export function signal_78314_v1(_, __, el) {
  el.innerHTML = bitty.time();
}
