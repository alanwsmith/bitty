export const bitty = {};

export async function $_SIGNAL_(ev, sender, el) {
  const json = await bitty.fetchData("$_SAMPLES_DIR_/valid-json.json");
  if (json.alfa === "bravo") {
    el.innerHTML = bitty.localTimestamp();
  }
}
