export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  b.send("test_$_TEST_ID_", "$_SIGNAL2_");
}

export function $_SIGNAL2_(payload, __, el) {
  if (payload === "test_$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
