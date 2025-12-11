export default class {
  #counter = 0;

  update(_event, element) {
    this.#counter += 1;
    element.innerHTML = this.#counter;
  }
}
