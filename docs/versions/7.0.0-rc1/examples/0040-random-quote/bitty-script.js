const template = `
<div class="example-quote-text">QUOTE</div>
<div class="example-quote-citation">CITATION</div>
`;

const quotes = [
  { text: "asdf", citation: "waerqwerwqer" },
  { text: "oiwueroweiur", citation: "luklulul" },
];

function getQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default class {
  bittyReady() {
    this.api.trigger("exampleQuote");
  }

  exampleQuote(_ev, el) {
    const quote = getQuote();
    const subs = [
      ["QUOTE", quote.text],
      ["CITATION", quote.citation],
    ];
    el.replaceChildren(this.api.makeHTML(template, subs));
  }
}
