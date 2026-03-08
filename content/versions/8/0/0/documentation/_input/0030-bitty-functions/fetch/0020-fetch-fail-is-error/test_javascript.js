export const bitty = {};

export async function $_SIGNAL_(ev, sender, el) {
  console.error(
    "NOTE: the 404 missing error for intentionally-missing-file.json is an expected error from testing.",
  );
  const response = await bitty.fetch(
    "$_SAMPLES_DIR_/intentionally-missing-file.json",
  );
  if (response === undefined) {
    el.innerHTML = bitty.time();
  }
}
