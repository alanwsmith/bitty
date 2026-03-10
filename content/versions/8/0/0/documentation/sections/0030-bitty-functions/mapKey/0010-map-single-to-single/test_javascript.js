export const b = {};

export function setKey_signal_07868_v1() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  b.mapKey("q", "signal_07868_v1");
}

export function signal_07868_v1(_, __, el) {
  el.innerHTML = b.time();
}
