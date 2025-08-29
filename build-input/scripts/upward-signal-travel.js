// deno-fmt-ignore-file

export class Parent {
    #value = 0;
  update(el, _event) {
    this.#value += 1;
    el.innerHTML = 
        `${this.#value} - Parent caught update at ${Date.now()}`;
  }
}

export class Child {
    #value = 0;
  update(el, _event) {
    this.#value += 1;
    el.innerHTML = 
      `${this.#value} - Child clicked at ${Date.now()}`;
  }
}
