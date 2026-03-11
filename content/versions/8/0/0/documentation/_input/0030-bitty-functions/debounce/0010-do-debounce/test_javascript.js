export const b = {};

export function $_SIGNAL_(_, __, ___) {
  b.trigger("$_SIGNAL2_");
  b.debounce("$_TEST_ID_", "$_SIGNAL3_", 2000);
}

export function $_SIGNAL2_(payload, __, el) {
  el.innerHTML = `debounce started: $${b.time()}`;
}

export function $_SIGNAL3_(payload, __, el) {
  el.innerHTML = `debounce resolved: $${b.time()}`;
}
