export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  b.mark("$_TEST_ID_");
  b.mark("$_TEST_ID_");
  if (b.getMarks("$_TEST_ID_").length === 2) {
    el.innerHTML = b.time();
  }
}
