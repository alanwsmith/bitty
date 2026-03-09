export const bitty = {};

export function setKey_signal_273EF_alfa() {
  /******************************************
   * This function is called when the
   * test is run.
   ******************************************/
  bitty.mapKey("t", "signal_273EF_alfa", ["invalidModKey"]);
}

export function signal_273EF_alfa(_, __, el) {
  el.innerHTML = bitty.time();
}
