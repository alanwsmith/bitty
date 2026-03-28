export const b = {};

export async function signal_33173_v1(_, __, el) {
  const key = "33173_v1";
  const data = await b.loadPageData(key);
  if (data === undefined) {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "error loading page data.";
  }
}
