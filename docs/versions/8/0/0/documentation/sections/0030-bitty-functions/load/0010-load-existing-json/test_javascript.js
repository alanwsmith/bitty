export const bitty = {};

export function signal_FBA10(ev, sender, el) {
  const json = bitty.loadData("FBA10");
  if (json.alfa === "bravo") {
    el.innerHTML = bitty.time();
  }
}
