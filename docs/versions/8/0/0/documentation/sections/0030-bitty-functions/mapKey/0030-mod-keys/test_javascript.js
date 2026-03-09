export const bitty = {};

export function setKey() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  bitty.mapKey("e", "signal_DE6CE_v1", ["ctrlKey"]);
}

export function signal_DE6CE_v1(_, __, el) {
  el.innerHTML = bitty.time();
}
