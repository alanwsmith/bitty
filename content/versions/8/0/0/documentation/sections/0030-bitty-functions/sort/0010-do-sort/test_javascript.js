export const bitty = {};

export function signal_FBF54(ev, sender, el) {
  const items = [
    "bravo",
    "Alfa",
    "Delta",
    "charlie",
  ];
  items.sort(bitty.sort);
  if (items[1] === "bravo") {
    el.innerHTML = bitty.time();
  }
}
