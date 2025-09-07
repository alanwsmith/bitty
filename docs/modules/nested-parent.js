export default class {
  #value = 0;

  increment(_event) {
    this.#value += 1;
  }

  updateParent(el, _event) {
    el.innerHTML = this.#value;
  }
}

