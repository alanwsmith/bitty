export default class {
  #count = 0;
  incrementWithOneReceiver(_event, el) {
    this.#count += 1;
    el.innerHTML = this.#count;
  }
}