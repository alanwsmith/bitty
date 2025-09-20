export default class {
  #value = 0;

  update(event, el) {
    this.#value += 1;
    el.innerHTML = this.#value;
  }
}
