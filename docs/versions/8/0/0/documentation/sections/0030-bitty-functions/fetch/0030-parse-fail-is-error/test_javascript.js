export const bitty = {};

export async function signal_49ADD_alfa(ev, sender, el) {
  const response = await bitty.fetch("/versions/8/0/0/documentation/samples/invalid-json.xjson");
  if (response === undefined) {
    el.innerHTML = bitty.time();
  }
}
