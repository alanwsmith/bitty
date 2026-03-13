export const b = {};

export async function signal_256A2_v1(ev, sender, el) {
  console.warn(
    "EXPECTED ERROR 256A2_v1: The JSON parsing error for this test is expected. It confirms an error is raised if the JSON can't be parsed.",
  );
  const response = await b.get("/versions/8/0/0/documentation/samples/invalid-json.xjson");
  if (response === undefined) {
    el.innerHTML = b.time();
  }
}
