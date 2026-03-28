export const b = {};

export async function $_SIGNAL_(_, __, el) {
  const key = "$_TEST_ID_";
  await b.saveSiteData("bravo", key);
  const data = await b.loadSiteData(key);
  if (data === "bravo") {
    el.innerHTML = b.time();
  }
}
