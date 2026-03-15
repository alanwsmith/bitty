export const b = { init: "items" };

const theItems = ["alfa", "bravo", "charlie", "delta", "echo", "foxtrot"];

export function items(_, __, el) {
  el.innerHTML = theItems.join(" - ");
}

export function shuffle(_, __, ___) {
  b.shuffle(theItems);
  b.trigger("items");
}
