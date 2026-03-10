export const b = {
  init: "init_$_TEST_ID_",
};

export function init_$_TEST_ID_() {
  console.warn(
    `EXPECTED ERROR $_TEST_ID_: The mapKey() error for test $_TEST_ID_ is expected. It confirms an error is logged to the console when an attempt is made to use an invalid modifier key`,
  );
  b.mapKey("t", "$_SIGNAL_", ["invalidModKey"]);
}

export function $_SIGNAL_(_, __, el) {
  el.innerHTML = b.time();
}
