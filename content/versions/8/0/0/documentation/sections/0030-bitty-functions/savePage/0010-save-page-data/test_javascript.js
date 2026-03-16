export const b = {};

export function signal_F15CA_v1(ev, sender, el) {
  const key = "data_F15CA_v1";
  b.savePage(key, { alfa: "bravo" });
  const data = b.loadPage(key);
  if (data.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
