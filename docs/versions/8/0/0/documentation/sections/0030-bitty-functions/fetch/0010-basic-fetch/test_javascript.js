export const bitty = {};

export async function signal_BAA6F_v1(ev, sender, el) {
  const json = await bitty.fetch("/versions/8/0/0/documentation/samples/valid-json.json");
  if (json.alfa === "bravo") {
    el.innerHTML = bitty.time();
  }
}
