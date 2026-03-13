export const b = {};

export async function $_SIGNAL_(ev, sender, el) {
  const json = await b.get("$_SAMPLES_DIR_/valid-json.json");
  if (json.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
