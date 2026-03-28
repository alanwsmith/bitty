export const b = {};

export function signal_F15CA_v1(_, __, el) {
  const key = "F15CA_v1";
  b.savePage({ alfa: "bravo" }, key);
  const data = b.loadPage(key);
  if (data.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
