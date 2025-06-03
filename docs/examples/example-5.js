export class Wrapper {
  #number;

  _updateNumber(target) {
    this.#number = target.value;
  }

  $htmlNumber() {
    return this.#number;
  }

  $valueNumber() {
    return this.#number;
  }
}
