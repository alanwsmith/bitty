export default class {
  #value = 0;

  increment(_event) {
    this.#value += 1;
  }

  updateParent(_event, el) {
    el.innerHTML = this.#value;
  }
}

