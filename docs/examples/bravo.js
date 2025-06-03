export class Wrapper {
  #counter = 0;

  _increment(_) {
    this.#counter += 1;
  }

  $displayCount(el, data) {
    el.innerHTML = this.#counter;
  }
}
