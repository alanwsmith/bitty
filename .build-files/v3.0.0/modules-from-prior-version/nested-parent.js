export default class {
  #value = 0;

  increment(_event) {
    this.#value += 1;
  }

  updateParent(_event, element) {
    element.innerHTML = this.#value;
  }
}

