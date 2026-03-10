export const b = {};

export function setKey() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  b.mapKey("w", "$_SIGNAL_");
}

export function $_SIGNAL_(_, __, el) {
  el.innerHTML = b.time();
}
