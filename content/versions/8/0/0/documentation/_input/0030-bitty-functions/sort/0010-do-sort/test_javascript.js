export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
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
