export default class {
  #value = 0;

  update(event, el) {
    this.#value += 1;
    const name = event.target.dataset.name;
    el.innerHTML = `${name} is now ${this.#value}`;
  }
}
