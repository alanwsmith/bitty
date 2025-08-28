// deno-fmt-ignore-file

export default class {

  #number;

  _setNumber(event) {
    this.#number = event.target.value;
  }

  $displayNumber(el, _) {
    el.innerHTML = this.#number;
  }

}
