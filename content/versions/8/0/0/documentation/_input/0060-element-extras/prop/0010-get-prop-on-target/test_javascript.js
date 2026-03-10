export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.prop("key") === "prop_$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
