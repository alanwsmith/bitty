export const b = {
  init: "loop",
};

let current = 0;

export async function loop(_, __, el) {
  for (let i = 1; i > 0; i += 1) {
    await b.sleep(3000);
    const quote = b.data.quotes.list[i % b.data.quotes.list.length];
    b.qs("blockquote", el).innerHTML = quote[0];
    b.qs("cite", el).innerHTML = quote[1];
  }
}
