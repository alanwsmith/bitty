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

export function cards() {
  return b.tee(
    data
      .cards
      .map((card) =>
        b.render("card", {
          "__CHAR1__": charx(card, 1),
          "__CHAR2__": charx(card, 2),
          "__UUID__": uuid(card),
        })
      ),
  );
}

export function categories() {
  return b.dedup(
    data.cards.map((card) => card.categories[0]),
  ).sort(b.sort);
}

export function charx(card, num) {
  return card.card.uid.substring(num - 1, num);
}

export function controls(_, __, el) {
  categories().forEach((category) => {
    el.appendChild(b.render("control", {
      "CATEGORY": category,
    }));
  });
}

export function deck(_, __, el) {
  cards().forEach((card) => {
    el.appendChild(card);
  });
}

export function deckError(_, __, el) {
  el.innerHTML = "Error: Could not load remote files";
}

export async function loadData() {
  data = await b.loadData("/[@ file.parent @]/data.json");
  if (data === undefined) {
    return false;
  }
  const loadedTemplates = await b.loadTemplates(
    "/[@ file.parent @]/templates/",
  );
  return loadedTemplates;
}

export function uuid(card) {
  return card.card.uid;
}
