export const b = {};

export async function signal_E4425_v1(_, __, el) {
  const key = "E4425_v1";
  const data = await b.loadSiteData(key);
  if (data === undefined) {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "error loading data.";
  }
}
