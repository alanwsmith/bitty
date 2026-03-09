export const bitty = {};

export function setKey_signal_273EF_v1() {
  /******************************************
   * This function is called when the
   * test is run.
   ******************************************/
  bitty.mapKey("t", "signal_273EF_v1", ["invalidModKey"]);
}

export function signal_273EF_v1(_, __, el) {
  el.innerHTML = bitty.time();
}
