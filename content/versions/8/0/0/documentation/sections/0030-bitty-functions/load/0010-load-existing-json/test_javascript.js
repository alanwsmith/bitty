export const bitty = {};

export function signal_FBA10_alfa(ev, sender, el) {
  const json = bitty.load("FBA10_alfa");
  if (json.alfa === "bravo") {
    el.innerHTML = bitty.time();
  }
}
