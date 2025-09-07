export default class {
  #value = 0;

  increment(el, _event) {
    this.#value += 1;
  }

  runTest(el, event) {
    el.innerHTML = `${event.target.dataset.name} is now: ${this.#value}`;
  }
}
