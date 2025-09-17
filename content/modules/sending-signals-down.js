export class Parent {
  #value = 0;

  incrementParent(_event) {
    this.#value += 1;
  }

  update(_event, el) {
    el.innerHTML = `Parent: ${this.#value}`;
  }
}

export class Child {
  #value = 0;

  incrementChild(_event) {
    this.#value += 1;
  }

  update(event, el) {
    el.innerHTML = 
      `${event.target.dataset.name}: ${this.#value}`;
  }
}
