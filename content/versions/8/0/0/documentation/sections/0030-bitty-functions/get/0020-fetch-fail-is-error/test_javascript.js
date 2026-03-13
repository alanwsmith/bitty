export const b = {};

export async function signal_BC807_v1(ev, sender, el) {
  console.warn(
    "EXPECTED ERROR BC807_v1: the 404 missing error for intentionally-missing-file.json is an expected error from testing.",
  );
  const response = await b.get(
    "/versions/8/0/0/documentation/samples/intentionally-missing-file.json",
  );
  if (response === undefined) {
    el.innerHTML = b.time();
  }
}
