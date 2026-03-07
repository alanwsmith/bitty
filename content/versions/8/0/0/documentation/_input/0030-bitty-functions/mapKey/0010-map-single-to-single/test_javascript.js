export const bitty = {};

export function setKey() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  bitty.mapKey("q", "$_SIGNAL_");
}

export function $_SIGNAL_(_, __, el) {
  el.innerHTML = bitty.localTimestamp();
}
