export const b = {};

export function signal_AC404_v1(ev, sender, el) {
  const key = "data_AC404_v1";
  b.savePage(key, { alfa: "bravo" });
  const data = b.restorePage(key);
  if (data.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
