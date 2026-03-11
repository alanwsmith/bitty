export const b = {
  init: "init_$_TEST_ID_",
};

export function init_$_TEST_ID_() {
  b.mapKey("e", "$_SIGNAL_", ["ctrlKey"]);
}

export function $_SIGNAL_(_, __, el) {
  el.innerHTML = b.time();
}
