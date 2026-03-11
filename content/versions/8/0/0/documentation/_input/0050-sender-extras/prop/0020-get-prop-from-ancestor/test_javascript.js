export const b = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.prop("key") === "prop_$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
