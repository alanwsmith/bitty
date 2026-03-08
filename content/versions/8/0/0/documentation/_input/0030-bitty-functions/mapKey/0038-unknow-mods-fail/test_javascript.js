export const bitty = {};

export function setKey_$_SIGNAL_() {
  /******************************************
   * This function is called when the
   * test is run.
   ******************************************/
  bitty.mapKey("t", "$_SIGNAL_", ["invalidModKey"]);
}

export function $_SIGNAL_(_, __, el) {
  el.innerHTML = bitty.time();
}
