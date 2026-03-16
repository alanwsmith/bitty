export const b = {};

export function signal_CFCDD_v1(ev, sender, el) {
  const key = "data_CFCDD_v1";
  b.savePage(key, { alfa: "bravo" });
  const data = b.loadPage(key);
  if (data.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
