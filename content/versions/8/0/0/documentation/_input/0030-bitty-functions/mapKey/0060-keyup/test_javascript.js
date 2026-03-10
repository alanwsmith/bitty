export const b = {
  init: "init_$_TEST_ID_",
};

export function init_$_TEST_ID_() {
  b.mapKey("b", "$_SIGNAL_", [], { listener: "keyup" });
}

export function $_SIGNAL_(_, __, el) {
  el.innerHTML = b.time();
}
