export const b = {};

export async function signal_BB235_v1(ev, sender, el) {
  const key = "BB235_v1";
  await b.savePageData({ alfa: "bravo" }, key);
  const data = await b.loadPageData(key);
  if (data.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
