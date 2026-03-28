export const b = {};

export async function $_SIGNAL_(_, __, el) {
  const key = "$_TEST_ID_";
  const value = "alfa";
  await b.savePageData(value, key);
  const result1 = await b.loadPageData(key);
  await b.deletePageData(key);
  const result2 = await b.loadPageData(key);
  if (result1 === value && result2 === undefined) {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "data did not delete properly";
  }
}
