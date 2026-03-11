export const b = {};

export function signal_FBF54_v1(ev, sender, el) {
  const items = [
    "bravo",
    "Alfa",
    "Delta",
    "charlie",
  ];
  items.sort(b.sort);
  if (items[1] === "bravo") {
    el.innerHTML = b.time();
  }
}
