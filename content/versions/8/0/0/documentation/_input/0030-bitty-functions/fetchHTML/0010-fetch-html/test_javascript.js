export const bitty = {};

export async function $_SIGNAL_(_, __, el) {
  const templates = await bitty.fetchHTML(
    "$_SAMPLES_DIR_/valid-templates/index.html",
  );
  const checkEl = templates.alfa.querySelector("div");
  if (checkEl.innerHTML = "alfa") {
    el.innerHTML = bitty.localTimestamp();
  }
}
