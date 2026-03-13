export const b = { init: "init" };

let data;
let url = "/versions/8/0/0/examples/0080-magic-deck-filter/data.json";

export async function init() {
  data = await b.loadData(url);
  if (data) {
    b.trigger("deck");
  } else {
    b.trigger("deckError");
  }
}

function cardIsLand(card) {
  return card.oracleCard.types[0] === "Land" ? "true" : "false";
}

function cardName(card) {
  return card.oracleCard.name;
}

export function deck(_, __, el) {
  el.replaceChildren(
    ...sortedCards().map((card) =>
      b.render("card", {
        __IS_LAND__: cardIsLand(card),
        __NAME__: cardName(card),
        __UUID__: uuid(card),
      })
    ),
  );
}

export function deckError(_, __, el) {
  el.innerHTML = "Error: Could not load remote files";
}

export function filter(ev, __, el) {
  el.setProp("filtered", ev.target.checked);
}

function sortedCards() {
  return data
    .cards
    .map((content) => content.card)
    .sort((a, b) => {
      return a.oracleCard.name.localeCompare(
        b.oracleCard.name,
      );
    });
}

function uuid(card) {
  return card.uid;
}