export const b = {};

export async function signal_284A3_v1(_, __, el) {
  const key = "284A3_v1";
  await b.loadSiteData(key, []);
  const data = await b.loadSiteData(key);
  if (JSON.stringify(data) === "[]") {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "error loading data.";
  }
}
