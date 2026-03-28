export const b = {};

export async function signal_6E439_v1(_, __, el) {
  const key = "6E439_v1";
  const data = await b.loadSiteData(key, []);
  if (JSON.stringify(data) === "[]") {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "error loading data.";
  }
}
