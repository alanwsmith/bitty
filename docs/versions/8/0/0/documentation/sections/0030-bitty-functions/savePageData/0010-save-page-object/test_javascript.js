export const b = {};

export async function signal_09889_v1(_, __, el) {
  const key = "09889_v1";
  const result = await b.savePageData({ alfa: "bravo" }, key);
  const data = await b.loadPageData(key);
  console.log(result);
  console.log(data);
  if (result === "09889_v1" && data.alfa === "bravo") {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "could not save page data";
  }
}
