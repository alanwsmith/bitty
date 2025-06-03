export class Wrapper {
  #counter = 0;

  _increment(_) {
    this.#counter += 1;
  }

  $displayCount(el, _) {
    el.innerHTML = this.#counter;
  }
}
