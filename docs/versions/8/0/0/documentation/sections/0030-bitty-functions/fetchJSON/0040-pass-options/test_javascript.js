export const bitty = {};

export async function signal_06F70(ev, sender, el) {
  const options = {
    method: "GET",
  };
  const json = await bitty.fetchJSON("/versions/8/0/0/documentation/samples/valid-json.json", options);
  if (json.alfa === "bravo") {
    el.innerHTML = bitty.localTimestamp();
  }
}
