export default class {
  #counter = 0;

  startCounter(_, el) {
    el.innerHTML = this.#counter;
  }

  plus(_, el) {
    this.#counter += 1;
    el.innerHTML = this.#counter;
  }

  minus(_, el) {
    this.#counter -= 1;
    el.innerHTML = this.#counter;
  }
}
