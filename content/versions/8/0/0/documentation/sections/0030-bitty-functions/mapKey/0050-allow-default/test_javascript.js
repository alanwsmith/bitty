export const b = {};

export function setKey_signal_9EAED_v1() {
  /******************************************
   * This functions is run via the `data-run`
   * attribute in the <[@ bitty_tag @]> tag.
   ******************************************/
  b.mapKey("/", "signal_9EAED_v1", [], { preventDefault: false });
}

export function signal_9EAED_v1(_, __, el) {
  el.innerHTML = b.time();
}
