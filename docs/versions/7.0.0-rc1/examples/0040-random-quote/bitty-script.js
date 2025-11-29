const quotes = [
  { text: "this quick brown fox", citation: "waerqwerwqer" },
  { text: "jumps over the lazy dog", citation: "luklulul" },
  { text: "more stuff here", citation: "anoter cite" },
];

function randInt() {
  return Math.floor(Math.random() * quotes.length);
}

export default class {
  #quoteIndex = 0;

  bittyReady() {
    this.api.trigger("exampleQuote exampleCitation");
  }

  exampleQuote(_ev, el) {
    for (let i = 0; i < 10; i += 1) {
      const newIndex = randInt(0, quotes.length - 1);
      if (newIndex !== this.#quoteIndex) {
        this.#quoteIndex = newIndex;
        break;
      }
    }
    el.innerHTML = quotes[this.#quoteIndex].text;
  }

  exampleCitation(_ev, el) {
    el.innerHTML = quotes[this.#quoteIndex].citation;
  }
}
