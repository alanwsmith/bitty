export const b = {};

export function setKey() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  b.mapKey("e", "signal_DE6CE_v1", ["ctrlKey"]);
}

export function signal_DE6CE_v1(_, __, el) {
  el.innerHTML = b.time();
}
