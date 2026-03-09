export const bitty = {};

export function $_SIGNAL_(_, __, el) {
  if (sender.prop("key") === "prop_$_TEST_ID_") {
    el.innerHTML = bitty.time();
  }
}
