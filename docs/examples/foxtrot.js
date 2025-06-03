export class Wrapper {
  #number;

  _setNumber(event) {
    this.#number = event.target.value;
  }

  $setNumberDisplay(el, _) {
    el.innerHTML = this.#number;
  }

  $setNumberValue(el, _) {
    el.value = this.#number;
  }
}
