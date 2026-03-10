export const b = {};

export async function signal_56B48_v1(_, __, el) {
  await b.fetchTemplates(
    "/versions/8/0/0/documentation/samples/valid-templates/index.html",
  );
  const output = b.render("alfa");
  const result = output.firstChild.innerHTML;
  if (result === "alfa") {
    el.innerHTML = b.time();
  }
}
