export const bitty = {};

export async function $_SIGNAL_(ev, sender, el) {
  const result = await bitty.fetchJSON("$_SAMPLES_DIR_/valid-json.json");
  if (result.value.alfa === "bravo") {
    el.innerHTML = bitty.localTimestamp();
  }
}
