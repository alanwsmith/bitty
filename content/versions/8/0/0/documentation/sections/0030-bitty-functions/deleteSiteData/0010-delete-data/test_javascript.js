export const b = {};

export async function signal_203EF_v1(_, __, el) {
  const key = "203EF_v1";
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
