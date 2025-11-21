export default class {
  #count = 0;
  incrementWithoutReciever(_event, _el) {
    this.#count += 1;
  }

  displayMultipleReceivers(_event, el) {
    el.innerHTML = this.#count;
  }
}