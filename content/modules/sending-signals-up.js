export class Parent {
  #value = 0;

  update(_event, el) {
    this.#value += 1;
    el.innerHTML = `Parent is ${this.#value} at ${Date.now()}`;
  }
}

export class Child {
  #value = 0;

  update(event, el) {
    this.#value += 1;
    const name = event.target.dataset.name;
    el.innerHTML = `${name} is ${this.#value} at ${Date.now()}`;
  }
}
