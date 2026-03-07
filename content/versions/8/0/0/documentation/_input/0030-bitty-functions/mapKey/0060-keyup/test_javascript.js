export const bitty = {};

export function setKey_$_SIGNAL_() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  bitty.mapKey("b", "$_SIGNAL_", [], { listener: "keyup" });
}

export function $_SIGNAL_(_, __, el) {
  el.innerHTML = bitty.localTimestamp();
}
