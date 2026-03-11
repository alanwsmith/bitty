export const b = {
  init: "deck",
};

export async function deck(_, __, el) {
  // const data = await b.fetchData("/versions/8/0/0/examples/0080-magic-deck-filter/data.json");
  // await b.fetchTemplates("/versions/8/0/0/examples/0080-magic-deck-filter/templates.html");
  el.innerHTML = "versions/8/0/0/examples/0080-magic-deck-filter";
}