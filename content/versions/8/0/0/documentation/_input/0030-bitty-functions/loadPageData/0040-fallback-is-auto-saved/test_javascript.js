export const b = {};

export async function $_SIGNAL_(_, __, el) {
  const key = "$_TEST_ID_";
  await b.loadPageData(key, []);
  const data = await b.loadPageData(key);
  if (JSON.stringify(data) === "[]") {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "error loading page data.";
  }
}
