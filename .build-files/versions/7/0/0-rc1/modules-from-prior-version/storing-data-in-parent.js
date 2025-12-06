export class Parent {
  #value = 0;
  decrementDemo(_event, element) {
    this.#value -= 1;
    element.innerHTML = this.#value;
  }
  incrementDemo(_event, element) {
    this.#value += 1;
    element.innerHTML = this.#value;
  }
}

export class Child {
  // no methods required
}
