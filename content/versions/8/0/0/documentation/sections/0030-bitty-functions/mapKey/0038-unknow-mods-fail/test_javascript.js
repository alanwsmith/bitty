export const bitty = {};

export function setKey_signal_273EF_v1() {
  /******************************************
   * This function is called when the
   * test is run.
   ******************************************/
  console.warn(
    `EXPECTED ERROR 273EF_v1: The mapKey() error for test 273EF_v1 is expected. It confirms an error is logged to the console when an attempt is made to use an invalid modifier key`,
  );
  bitty.mapKey("t", "signal_273EF_v1", ["invalidModKey"]);
}

export function signal_273EF_v1(_, __, el) {
  el.innerHTML = bitty.time();
}
