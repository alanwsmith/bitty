export const b = {};

export function signal_F7BED_v1(ev, sender, el) {
  b.mark("F7BED_v1");
  b.mark("F7BED_v1", "note");
  const marks = b.getMarks("F7BED_v1");
  if (marks.length === 2 && marks[1][1] === "note") {
    el.innerHTML = b.time();
  }
}
