// deno-fmt-ignore-file

export class Widget {

  #number;

  _setNumber(event) {
    this.#number = event.target.value;
  }

  $displayNumber(el, _) {
    el.innerHTML = this.#number;
  }

}
