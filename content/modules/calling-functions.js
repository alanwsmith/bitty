export default class {
  #counter = 0;

  increment(el, _event) {
    this.#counter += 1;
  }

  update(el, _event) {
    el.innerHTML = this.#counter;
  }
}
