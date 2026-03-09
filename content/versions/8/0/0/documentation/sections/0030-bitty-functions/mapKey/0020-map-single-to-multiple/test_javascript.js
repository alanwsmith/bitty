export const bitty = {};

export function setKey() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  bitty.mapKey("w", "signal_CFB66_v1");
}

export function signal_CFB66_v1(_, __, el) {
  el.innerHTML = bitty.time();
}
