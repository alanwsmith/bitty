export const bitty = {};

export function signal_F9163(ev, sender, el) {
  const json = bitty.loadJSON("F9163");
  if (json.alfa === "bravo") {
    el.innerHTML = bitty.localTimestamp();
  }
}
