export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  b.mark("$_TEST_ID_");
  b.mark("$_TEST_ID_", "note");
  const marks = b.getMarks("$_TEST_ID_");
  if (marks.length === 2 && marks[1][1] === "note") {
    el.innerHTML = b.time();
  }
}
