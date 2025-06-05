// deno-fmt-ignore-file

export class Wires {

  #number;

  _setNumber(event) {
    this.#number = event.target.value;
  }

  $displayNumber(el, _) {
    el.innerHTML = this.#number;
  }

  $setNumberValue(el, _) {
    el.value = this.#number;
  }

}
