export const b = {};

export async function signal_C087F_v1(ev, sender, el) {
  const result = await b.saveSiteData({}, "C087F_v1");
  const data = await b.loadSiteData("C087F_v1");
  if (result === "C087F_v1" && JSON.stringify(data) === "{}") {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "data did not save properly";
  }
}
