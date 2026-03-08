export const bitty = {};

export function setKey() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  bitty.mapKey("e", "signal_DE6CE", ["ctrlKey"]);
}

export function signal_DE6CE(_, __, el) {
  el.innerHTML = bitty.time();
}
