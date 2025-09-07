export class Parent {
  #value = 0;

  increment(el, _event) {
    this.#value += 1;
  }

  update(el, _event) {
    el.innerHTML = `Parent: ${this.#value}`;
  }
}

export class Child {
  #value = 0;

  increment(el, _event) {
    this.#value += 1;
  }

  update(el, event) {
    el.innerHTML = `${event.target.dataset.name}: ${this.#value}`;
  }
}
