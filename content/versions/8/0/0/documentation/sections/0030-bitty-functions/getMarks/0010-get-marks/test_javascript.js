export const b = {};

export function signal_F7BED_v1(ev, sender, el) {
  b.mark("F7BED_v1");
  b.mark("F7BED_v1");
  if (b.getMarks("F7BED_v1").length === 2) {
    el.innerHTML = b.time();
  }
}
