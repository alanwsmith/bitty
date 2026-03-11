export const b = {};

export async function signal_F791C_v1(ev, sender, el) {
  console.warn(
    "EXPECTED ERROR F791C_v1: the 404 missing error for intentionally-missing-file.json is an expected error from testing.",
  );
  const response = await b.loadData(
    "/versions/8/0/0/documentation/samples/intentionally-missing-file.json",
  );
  if (response === undefined) {
    el.innerHTML = b.time();
  }
}
