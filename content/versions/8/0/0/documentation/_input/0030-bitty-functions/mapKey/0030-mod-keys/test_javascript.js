export const b = {};

export function setKey() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  b.mapKey("e", "$_SIGNAL_", ["ctrlKey"]);
}

export function $_SIGNAL_(_, __, el) {
  el.innerHTML = b.time();
}
