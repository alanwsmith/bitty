export const b = {};

export async function signal_C1884_v1(_, __, el) {
  const key = "C1884_v1";
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
