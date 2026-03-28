export const b = {};

export async function signal_AD8E1_v1(ev, sender, el) {
  const json = await b.getData("/versions/8/0/0/documentation/samples/valid-json.json");
  if (json.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
