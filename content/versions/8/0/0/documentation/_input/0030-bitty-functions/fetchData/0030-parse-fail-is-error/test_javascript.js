export const bitty = {};

export async function $_SIGNAL_(ev, sender, el) {
  const response = await bitty.fetchData("$_SAMPLES_DIR_/invalid-json.xjson");
  if (response === undefined) {
    el.innerHTML = bitty.time();
  }
}
