export const bitty = {};

export function setKey_signal_9EAED() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  bitty.mapKey("/", "signal_9EAED", [], { preventDefault: false });
}

export function signal_9EAED(_, __, el) {
  el.innerHTML = bitty.time();
}
