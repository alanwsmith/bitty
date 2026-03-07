export const bitty = {};

export function setKey() {
  /******************************************
   * This function is called when the
   * test is run.
   ******************************************/
  bitty.mapKey("t", "$_SIGNAL_", ["invalidModKey"]);
}

export function $_SIGNAL_(_, __, el) {
  el.innerHTML = bitty.localTimestamp();
}
