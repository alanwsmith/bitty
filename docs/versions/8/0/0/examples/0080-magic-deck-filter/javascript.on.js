export const b = {
  init: "init",
};

let data;

export async function init() {
  if (await loadData() === true) {
    b.trigger("controls");
    b.trigger("deck");
  } else {
    b.trigger("deckError");
  }
}

export function categories() {
  return b.dedup(
    data.cards.map((card) => card.categories[0]),
  ).sort(b.sort);
}

export function controls(_, __, el) {
  b.tee(categories());
}

export function deck(_, __, el) {
  el.innerHTML = "got data";
}

export function deckError(_, __, el) {
  el.innerHTML = "Error: Could not load remote files";
}

export async function loadData() {
  data = await b.loadData("/versions/8/0/0/examples/0080-magic-deck-filter/data.json");
  if (data === undefined) {
    return false;
  }
  const loadedTemplates = await b.fetchTemplates(
    "/versions/8/0/0/examples/0080-magic-deck-filter/templates/",
  );
  return loadedTemplates;
}