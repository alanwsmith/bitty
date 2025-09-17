export default class {
  #counter = 0;

  update(_event, el) {
    this.#counter += 1;
    el.innerHTML = this.#counter;
  }
}
