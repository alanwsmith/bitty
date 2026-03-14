export const b = { init: "loop" };

let quotes;

export async function loop(_, __, el) {
  quotes = b.data.quotes.list;
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