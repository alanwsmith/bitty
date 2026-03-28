export const b = {};

export async function $_SIGNAL_(_, __, el) {
  const key = "$_TEST_ID_";
  const value = "alfa";
  await b.saveSiteData(value, key);
  const result1 = await b.loadSiteData(key);
  await b.deleteSiteData(key);
  const result2 = await b.loadSiteData(key);
  if (result1 === value && result2 === undefined) {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "data did not delete properly";
  }
}
