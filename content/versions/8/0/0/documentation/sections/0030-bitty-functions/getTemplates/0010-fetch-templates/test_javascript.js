export const b = {};

export async function signal_D33B5_v1(_, __, el) {
  await b.getTemplates(
    "/versions/8/0/0/documentation/samples/templates/index.html",
  );
  if (
    b.templates["test_html"] !== undefined &&
    b.data["test_data"] !== undefined &&
    b.svgs["test_svg"] !== undefined
  ) {
    el.innerHTML = b.time();
  }
}
