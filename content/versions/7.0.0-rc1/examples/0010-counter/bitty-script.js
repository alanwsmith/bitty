export default class {
  #counter = 0;

  initButton(_, el) {
    el.innerHTML = this.#counter;
  }

  count(_, el) {
    this.#counter += 1;
    el.innerHTML = this.#counter;
  }
}
