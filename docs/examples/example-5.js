export class Wrapper {
  #number;

  _updateNumber(event) {
    this.#number = event.target.value;
  }

  $htmlNumber(_) {
    return this.#number;
  }

  $valueNumber(_) {
    return this.#number;
  }
}
