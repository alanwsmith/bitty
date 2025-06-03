export class Wrapper {
  #number;

  _updateNumber(target) {
    this.#number = target.value;
  }

  $htmlNumber(_) {
    return this.#number;
  }

  $valueNumber(_) {
    return this.#number;
  }
}
