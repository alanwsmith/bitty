export const bitty = {};

export function $_SIGNAL_(_, __, ___) {
  bitty.trigger("$_SIGNAL2_");
  bitty.debounce("$_TEST_ID_", "$_SIGNAL3_", 2000);
}

export function $_SIGNAL2_(payload, __, el) {
  el.innerHTML = `debounce started: $${bitty.time()}`;
}

export function $_SIGNAL3_(payload, __, el) {
  el.innerHTML = `debounce resolved: $${bitty.time()}`;
}
