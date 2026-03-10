export const b = {};

export async function $_SIGNAL_(_, __, el) {
  await b.fetchTemplates(
    "$_SAMPLES_DIR_/valid-templates/index.html",
  );
  const output = b.render("alfa");
  const result = output.firstChild.innerHTML;
  if (result === "alfa") {
    el.innerHTML = b.time();
  }
}
