export const b = {
  init: "init_$_TEST_ID_",
};

export function init_$_TEST_ID_() {
  b.mapKey("/", "$_SIGNAL_", [], { preventDefault: false });
}

export function $_SIGNAL_(_, __, el) {
  el.innerHTML = b.time();
}
