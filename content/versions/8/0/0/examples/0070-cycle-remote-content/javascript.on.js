export const b = {
  init: "loop",
};

export async function loop(_, __, el) {
  const data = await b.loadData("/v8-bits/example-quotes.json");
  if (data !== undefined) {
    for (let i = 1; i > 0; i += 1) {
      await b.sleep(4000);
      b.setCSS("--text-color", "var(--match-color)");
      await b.sleep(1200);
      const quote = data.quotes[i % data.quotes.length];
      b.qs("blockquote", el).innerHTML = quote[0];
      b.qs("cite", el).innerHTML = quote[1];
      b.setCSS("--text-color", "var(--default-color)");
    }
  }
}
