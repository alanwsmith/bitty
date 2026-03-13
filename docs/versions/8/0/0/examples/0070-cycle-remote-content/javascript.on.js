export const b = { init: "init" };

let quotes;
const url = "/versions/8/0/0/examples/0070-cycle-remote-content/data.json";

export async function init() {
  const data = await b.get(url);
  if (data !== undefined) {
    quotes = data.quotes;
    b.trigger("loop");
  }
}

export async function loop(_, __, el) {
  for (let count = 1; count > 0; count += 1) {
    await b.sleep(2000);
    b.setCSS("--text-color", "var(--match-color)");
    await b.sleep(1200);
    changeQuote(count, el);
    b.setCSS("--text-color", "var(--default-color)");
  }
}

function changeQuote(count, el) {
  const quote = quotes[count % quotes.length];
  b.qs("blockquote", el).innerHTML = quote[0];
  b.qs("cite", el).innerHTML = quote[1];
}