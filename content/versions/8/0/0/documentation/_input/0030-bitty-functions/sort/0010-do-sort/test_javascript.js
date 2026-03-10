export const b = {};

export function $_SIGNAL_(ev, sender, el) {
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
