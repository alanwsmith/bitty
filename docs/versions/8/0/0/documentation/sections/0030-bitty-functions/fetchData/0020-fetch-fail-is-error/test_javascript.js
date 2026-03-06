export const bitty = {};

export async function signal_F3507(ev, sender, el) {
  console.error(
    "NOTE: the 404 missing error for intentionally-missing-file.json is an expected error from testing.",
  );
  const response = await bitty.fetchData(
    "/versions/8/0/0/documentation/samples/intentionally-missing-file.json",
  );
  if (response === undefined) {
    el.innerHTML = bitty.localTimestamp();
  }
}
