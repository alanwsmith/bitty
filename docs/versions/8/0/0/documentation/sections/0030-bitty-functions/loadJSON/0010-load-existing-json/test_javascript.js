export const bitty = {};

export function signal_F9163(ev, sender, el) {
  bitty.saveJSON("F9163", { alfa: "bravo" });
  const json = bitty.loadJSON("F9163");
  if (json.alfa === "bravo") {
    el.innerHTML = bitty.localTimestamp();
  }
}
