export const b = {
  init: "init_273EF_v1",
};

export function init_273EF_v1() {
  console.warn(
    `EXPECTED ERROR 273EF_v1: The mapKey() error for test 273EF_v1 is expected. It confirms an error is logged to the console when an attempt is made to use an invalid modifier key`,
  );
  b.mapKey("t", "signal_273EF_v1", ["invalidModKey"]);
}

export function signal_273EF_v1(_, __, el) {
  el.innerHTML = b.time();
}
