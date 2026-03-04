export const bitty = {};

export async function signal_F5056(ev, sender, el) {
  const response = await bitty.fetchJSON("/versions/8/0/0/documentation/samples/invalid-json.xjson");
  if (response === undefined) {
    el.innerHTML = bitty.localTimestamp();
  }
}
