export const bitty = {};

export function setKey() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  bitty.mapKey("r", "signal_6B685", ["CTRL"]);
}

export function signal_6B685(_, __, el) {
  el.innerHTML = bitty.localTimestamp();
}
