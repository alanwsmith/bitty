export const b = {};

export async function $_SIGNAL_(_, __, el) {
  await b.loadTemplates(
    "$_SAMPLES_DIR_/templates/index.html",
  );
  if (
    b.templates["test_html"] !== undefined &&
    b.data["test_data"] !== undefined &&
    b.svgs["test_svg"] !== undefined
  ) {
    el.innerHTML = b.time();
  }
}
