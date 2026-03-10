export const b = {};

export function setKey() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  b.mapKey("r", "signal_6B685_v1", ["CTRL"]);
}

export function signal_6B685_v1(_, __, el) {
  el.innerHTML = b.time();
}
