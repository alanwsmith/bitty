export const b = {};

export async function $_SIGNAL_(_, __, el) {
  const key = "$_TEST_ID_";
  const data = await b.loadPageData(key);
  if (data === undefined) {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "error loading page data.";
  }
}
