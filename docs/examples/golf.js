export class Wrapper {
  #number;

  _setNumber(event) {
    this.#number = event.target.value;
  }

  $displayNumber(el, _) {
    el.innerHTML = this.#number;
  }
}
