window.RandomQuote = class {
  #quote = 0;

  nextQuote(_, __) {
    this.#quote += 1;
    if (this.#quote === 3) {
      this.#quote = 0;
    }
    this.api.trigger("pickQuote");
  }

  pickQuote(_, el) {
    if (el.propToInt("id") === this.#quote) {
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  }
};
