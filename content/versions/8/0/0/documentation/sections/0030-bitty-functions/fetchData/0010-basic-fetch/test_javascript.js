export const bitty = {};

export async function signal_93E60_v1(ev, sender, el) {
  const json = await bitty.fetchData("/versions/8/0/0/documentation/samples/valid-json.json");
  if (json.alfa === "bravo") {
    el.innerHTML = bitty.time();
  }
}
