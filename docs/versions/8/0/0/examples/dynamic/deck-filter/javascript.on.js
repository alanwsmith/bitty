export const b = { init: "init" };

let data;
let url = "/versions/8/0/0/examples/dynamic/deck-filter/data.json";

export async function init() {
  data = await b.get(url);
  if (data) {
    b.trigger("deck");
    b.trigger("controls");
  } else {
    b.trigger("deckError");
  }
}

function cardIsLand(card) {
  return card.oracleCard.types[0] === "Land";
}

function cardName(card) {
  return card.oracleCard.name;
}

export function controls(_, __, el) {
  const subs = { __FRONT_LABEL__: "Hightlight Cards", __SEND__: "filter" };
  el.replaceChildren(b.switch(subs));
}

export function deck(_, __, el) {
  el.replaceChildren(
    ...sortedCards().map((card) => {
      const subs = {
        __IS_LAND__: cardIsLand(card),
        __NAME__: cardName(card),
        __UUID__: uuid(card),
      };
      return b.render("card", subs);
    }),
  );
}

export function deckError(_, __, el) {
  el.innerHTML = "Error: Could not load remote files";
}

export function filter(_, sender, el) {
  sender.setAria("checked", !sender.ariaBool("checked"));
  el.setProp("filtered", sender.ariaBool("checked"));
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