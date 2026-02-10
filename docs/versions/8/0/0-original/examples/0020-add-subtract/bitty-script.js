window.AddSubtract = class {
  #counter = 0;

  add(_, el) {
    this.#counter += 1;
    el.innerHTML = this.#counter;
  }

  subtract(_, el) {
    this.#counter -= 1;
    el.innerHTML = this.#counter;
  }
};
