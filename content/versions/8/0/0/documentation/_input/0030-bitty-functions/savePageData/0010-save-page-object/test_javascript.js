export const b = {};

export async function $_SIGNAL_(_, __, el) {
  const key = "$_TEST_ID_";
  const result = await b.savePageData({ alfa: "bravo" }, key);
  const data = await b.loadPageData(key);
  console.log(result);
  console.log(data);
  if (result === "$_TEST_ID_" && data.alfa === "bravo") {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "could not save page data";
  }
}
