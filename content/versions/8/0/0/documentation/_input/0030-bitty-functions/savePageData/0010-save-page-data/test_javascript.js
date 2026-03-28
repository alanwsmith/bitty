export const b = {};

export function $_SIGNAL_(_, __, el) {
  const key = "$_TEST_ID_";
  b.savePageData({ alfa: "bravo" }, key);
  const data = b.loadPageData(key);
  if (data.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
