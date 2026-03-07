export const bitty = {};

export function setKey_signal_273EF() {
  /******************************************
   * This function is called when the
   * test is run.
   ******************************************/
  bitty.mapKey("t", "signal_273EF", ["invalidModKey"]);
}

export function signal_273EF(_, __, el) {
  el.innerHTML = bitty.localTimestamp();
}
