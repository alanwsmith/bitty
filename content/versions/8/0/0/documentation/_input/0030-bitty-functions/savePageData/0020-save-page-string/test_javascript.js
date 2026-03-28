export const b = {};

export async function $_SIGNAL_(_, __, el) {
  const key = "$_TEST_ID_";
  const result = await b.savePageData("bravo", key);
  const data = await b.loadPageData(key);
  if (result === "$_TEST_ID_" && data === "bravo") {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "error loading page data.";
  }
}
