export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  b.mark("$_TEST_ID_", "note");
  if (b._marks["$_TEST_ID_"][0][1] === "note") {
    el.innerHTML = b.time();
  }
}
