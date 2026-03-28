export const b = {};

export function signal_0964D_v1(_, __, el) {
  const key = "0964D_v1";
  b.savePageData({ alfa: "bravo" }, key);
  const data = b.loadPageData(key);
  if (data.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
