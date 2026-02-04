window.ClickCounter = class {
  #counter = 0;

  count(_, el) {
    this.#counter += 1;
    el.innerHTML = `Clicks: ${this.#counter}`;
  }
};
