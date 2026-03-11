export const b = { init: "init" };

let data;

export async function init() {
  data = await b.loadData("/versions/8/0/0/examples/0080-magic-deck-filter/data.json");
  if (data === undefined) {
    b.trigger("deckError");
  } else {
    b.trigger("deck");
  }
}

function cardIsLand(card) {
  return card.card.oracleCard.types[0] === "Land" ? "true" : "false";
}

function cardName(card) {
  return card.card.oracleCard.name;
}

function cards() {
  return data
    .cards
    .sort((a, b) => {
      return a.card.oracleCard.name.localeCompare(
        b.card.oracleCard.name,
      );
    })
    .map((card) =>
      b.render("card", {
        "__IS_LAND__": cardIsLand(card),
        "__NAME__": cardName(card),
        "__UUID__": uuid(card),
      })
    );
}

export function deck(_, __, el) {
  cards().forEach((card) => {
    el.appendChild(card);
  });
}

export function deckError(_, __, el) {
  el.innerHTML = "Error: Could not load remote files";
}

export function filter(ev, __, el) {
  el.setProp("filtered", ev.target.checked);
}

function uuid(card) {
  return card.card.uid;
}