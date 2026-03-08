export const bitty = {};

export async function signal_CD716(ev, sender, el) {
  const response = await bitty.fetchData("/versions/8/0/0/documentation/samples/invalid-json.xjson");
  if (response === undefined) {
    el.innerHTML = bitty.time();
  }
}
