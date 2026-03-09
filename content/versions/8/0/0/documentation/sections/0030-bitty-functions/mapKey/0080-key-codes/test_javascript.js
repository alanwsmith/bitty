export const bitty = {};

export function setKey_signal_80715_v1() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  bitty.mapKey(89, "signal_80715_v1");
}

export function signal_80715_v1(_, __, el) {
  el.innerHTML = bitty.time();
}
