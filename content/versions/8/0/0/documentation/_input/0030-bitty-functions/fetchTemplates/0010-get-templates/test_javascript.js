export const bitty = {};

export async function $_SIGNAL_(ev, sender, el) {
  el.dataset.solo = true;
  const templates = await bitty.fetchTemplates(
    "$_SAMPLES_DIR_/valid-templates/index.html",
  );
  const checkEl = templates.alfa.querySelector("div");
  if (checkEl.innerHTML = "alfa") {
    el.innerHTML = bitty.localTimestamp();
  }
}
