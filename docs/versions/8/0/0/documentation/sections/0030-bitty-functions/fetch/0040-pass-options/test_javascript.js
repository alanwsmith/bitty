export const bitty = {};

export async function signal_DB9CF_alfa(ev, sender, el) {
  const options = {
    method: "GET",
  };
  const json = await bitty.fetch("/versions/8/0/0/documentation/samples/valid-json.json", options);
  if (json.alfa === "bravo") {
    el.innerHTML = bitty.time();
  }
}
