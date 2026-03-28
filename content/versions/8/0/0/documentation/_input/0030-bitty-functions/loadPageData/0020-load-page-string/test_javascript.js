export const b = {};

export async function $_SIGNAL_(_, __, el) {
  const key = "$_TEST_ID_";
  const value = "value_$_TEST_ID_";
  const result = await b.savePageData(value, key);
  const data = await b.loadPageData(key);
  if (result === "$_TEST_ID_" && data === value) {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "could not save page data";
  }
}
