export default class {
  #value = 0;

  update(event, element) {
    this.#value += 1;
    element.innerHTML = this.#value;
  }
}
