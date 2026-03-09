export const bitty = {};

export function signal_FBA10_v1(ev, sender, el) {
  const json = bitty.load("FBA10_v1");
  if (json.alfa === "bravo") {
    el.innerHTML = bitty.time();
  }
}
