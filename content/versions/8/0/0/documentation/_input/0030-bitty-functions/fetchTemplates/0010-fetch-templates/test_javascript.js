export const bitty = {};

export async function $_SIGNAL_(_, __, el) {
  const templates = await bitty.fetchTemplates(
    "$_SAMPLES_DIR_/valid-templates/index.html",
  );
  const output = bitty.render(templates["alfa"]);
  const result = output.firstChild.innerHTML;
  if (result === "alfa") {
    el.innerHTML = bitty.time();
  }
}
