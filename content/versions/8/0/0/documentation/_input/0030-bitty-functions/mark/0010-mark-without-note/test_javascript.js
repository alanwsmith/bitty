export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  b.mark("$_TEST_ID_");
  if (b._marks["$_TEST_ID_"].length === 1) {
    el.innerHTML = b.time();
  }
}
