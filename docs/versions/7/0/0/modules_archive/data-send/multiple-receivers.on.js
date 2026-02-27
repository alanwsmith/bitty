export default class {
  #count = 0;
  incrementWithMultipleReceivers(_event, el) {
    this.#count += 1;
    el.innerHTML = this.#count;
  }
}