export class Parent {
  #value = 0;

  incrementParent(_event) {
    this.#value += 1;
  }

  update(_event, element) {
    element.innerHTML = `Parent: ${this.#value}`;
  }
}

export class Child {
  #value = 0;

  incrementChild(_event) {
    this.#value += 1;
  }

  update(event, element) {
    element.innerHTML = 
      `${event.target.dataset.name}: ${this.#value}`;
  }
}
