export const b = {
  init: "loop",
};

let current = 0;

export async function loop(_, __, el) {
  while (true) {
    await b.sleep(3000);
    current += 1;
    if (current === b.data.quotes.list.length) {
      current = 0;
    }
    b.qs("blockquote", el).innerHTML = b.data.quotes.list[current][0];
    b.qs("cite", el).innerHTML = b.data.quotes.list[current][1];
  }
}
