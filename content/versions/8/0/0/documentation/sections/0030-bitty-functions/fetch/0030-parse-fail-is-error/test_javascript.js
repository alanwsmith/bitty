export const bitty = {};

export async function signal_49ADD_v1(ev, sender, el) {
  console.warn(
    "EXPECTED ERROR 49ADD_v1: The JSON parsing error for this test is expected. It confirms an error is raised if the JSON can't be parsed.",
  );
  const response = await bitty.fetch("/versions/8/0/0/documentation/samples/invalid-json.xjson");
  if (response === undefined) {
    el.innerHTML = bitty.time();
  }
}
