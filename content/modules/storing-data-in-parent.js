export class Parent {
  #value = 0;
  decrement(_event, element) {
    this.#value -= 1;
    element.innerHTML = this.#value;
  }
  increment(_event, element) {
    this.#value += 1;
    element.innerHTML = this.#value;
  }
}

export class Child {
  // no methods required
}
