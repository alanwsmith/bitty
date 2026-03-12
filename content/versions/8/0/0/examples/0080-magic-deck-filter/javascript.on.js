export const b = { init: "init" };

let data;
let url = "/[@ file.parent @]/data.json";

export async function init() {
  data = await b.loadData(url);
  if (data === undefined) {
    b.trigger("deckError");
  } else {
    b.trigger("deck");
  }
}

function cardIsLand(card) {
  return card.oracleCard.types[0] === "Land" ? "true" : "false";
}

function cardName(card) {
  return card.oracleCard.name;
}

function cards() {
  return data
    .cards
    .map((content) => content.card)
    .sort((a, b) => {
      return a.oracleCard.name.localeCompare(
        b.oracleCard.name,
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
  el.replaceChildren(...cards());
}

export function deckError(_, __, el) {
  el.innerHTML = "Error: Could not load remote files";
}

export function filter(ev, __, el) {
  el.setProp("filtered", ev.target.checked);
}

function uuid(card) {
  return card.uid;
}
