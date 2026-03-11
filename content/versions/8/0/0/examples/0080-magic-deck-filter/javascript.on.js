export const b = {
  init: "init",
};

let data;

export async function init() {
  if (await loadData() === true) {
    b.trigger("deck");
  } else {
    b.trigger("deckError");
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
        "__CHAR1__": charx(card, 1),
        "__CHAR2__": charx(card, 2),
        "__IS_LAND__": cardIsLand(card),
        "__NAME__": cardName(card),
        "__UUID__": uuid(card),
      })
    );
}

function charx(card, num) {
  return card.card.uid.substring(num - 1, num);
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

export async function loadData() {
  data = await b.loadData("/[@ file.parent @]/data.json");
  if (data === undefined) {
    return false;
  }
  return await b.loadTemplates(
    "/[@ file.parent @]/templates/",
  );
}

function uuid(card) {
  return card.card.uid;
}
