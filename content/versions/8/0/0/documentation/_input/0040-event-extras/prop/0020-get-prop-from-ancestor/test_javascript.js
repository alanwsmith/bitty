export const b = {};

export function $_SIGNAL_(ev, __, el) {
  if (ev.prop("key") === "prop_$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
