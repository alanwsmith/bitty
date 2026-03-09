export const bitty = {};

export async function $_SIGNAL_(ev, sender, el) {
  console.warn(
    "EXPECTED ERROR $_TEST_ID_: the 404 missing error for intentionally-missing-file.json is an expected error from testing.",
  );
  const response = await bitty.fetch(
    "$_SAMPLES_DIR_/intentionally-missing-file.json",
  );
  if (response === undefined) {
    el.innerHTML = bitty.time();
  }
}
