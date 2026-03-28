export const b = {};

export async function signal_05109_v1(ev, sender, el) {
  const options = {
    method: "GET",
  };
  const json = await b.getData("/versions/8/0/0/documentation/samples/valid-json.json", options);
  if (json.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
