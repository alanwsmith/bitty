export const b = {};

export async function $_SIGNAL_(ev, sender, el) {
  const key = "$_TEST_ID_";
  await b.savePageData({ alfa: "bravo" }, key);
  const data = await b.loadPageData(key);
  if (data.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
