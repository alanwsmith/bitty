export const b = {
  init: "loop",
};

let current = 0;

export async function loop(_, __, el) {
  const data = await b.fetchData("/v8-bits/example-quotes.json");
  if (data !== undefined) {
    while (true) {
      await b.sleep(3000);
      current += 1;
      if (current === data.quotes.length) {
        current = 0;
      }
      const quote = data.quotes[current];
      b.qs("blockquote", el).innerHTML = quote[0];
      b.qs("cite", el).innerHTML = quote[1];
    }
  }
}
