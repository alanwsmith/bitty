export const bitty = {};

export function signal_E0326(ev, sender, el) {
  const json = bitty.loadData("E0326");
  if (json.alfa === "bravo") {
    el.innerHTML = bitty.time();
  }
}
